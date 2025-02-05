import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { TagService } from '../tag.service';
import { map, Observable, tap, combineLatest, first } from 'rxjs';
import { Tag } from '../model/tag';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, NgIf, NgFor, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  publishedArticlesCount$: Observable<number>;
  unPublishedArticlesCount$: Observable<number>;
  tagsData$: Observable<Tag[]>;
  tagDataCount$: Observable<number>;
  test: Date;
  totalArticlesCount$: Observable<number>;
  lastArticleDate$: Observable<Date>;
  tags: Tag[];
  constructor(private blogService: BlogService, private tagService: TagService){}

  ngOnInit(){
    this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();
    this.unPublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
    this.tagsData$ = this.tagService.getTagsData();
    this.tagDataCount$ = this.tagService.getTagsDataCount();

    this.totalArticlesCount$ = combineLatest([
      this.publishedArticlesCount$,
      this.unPublishedArticlesCount$
    ]).pipe(
      map(([published, unpublished]) => published + unpublished)
    );

    this.lastArticleDate$ = this.blogService.getFrontmatterData().pipe(
          first(),
          map(article => article[0].data.date)
        );
  }

  getPercentage(tag: { nombreArticles: number }): string {
    return `${(tag.nombreArticles / 32) * 100}%`;
  }
}