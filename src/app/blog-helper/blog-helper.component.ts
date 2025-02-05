import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgFor, DatePipe, NgIf, AsyncPipe } from '@angular/common';
import { Article } from '../model/article';
import { Observable } from 'rxjs';

@Component({
  imports: [NgFor, DatePipe, NgIf, AsyncPipe],
  selector: 'app-blog-helper',
  templateUrl: './blog-helper.component.html',
  styleUrl: './blog-helper.component.css',
    standalone: true,
})
export class BlogHelperComponent implements OnInit {
  articles$: Observable<Article[]>;
  unpublishedArticles$: Observable<Article[]>;
  publishedArticles$: Observable<Article[]>;
  publishedArticlesCount$: Observable<number>;
  unpublishedArticlesCount$: Observable<number>;
  lastArticleDate$: Observable<Date>;
  
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.articles$ = this.blogService.getFrontmatterData();

    this.unpublishedArticles$ = this.blogService.getUnPublishedArticles();

    this.publishedArticles$ = this.blogService.getPublishedArticles();

    this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();

    this.unpublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
  }
}
