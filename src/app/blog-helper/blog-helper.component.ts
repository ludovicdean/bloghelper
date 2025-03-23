import { Component, OnInit } from '@angular/core';
import { BlogService, YearArticles } from '../blog.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Article } from '../model/article';
import { Observable, of } from 'rxjs';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  imports: [AsyncPipe, CardListComponent, NgIf, NgFor, NgClass],
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
  groupedByYearArticles$: Observable<YearArticles[]>;
  activeTab: 'published' | 'unpublished' = 'published';
  
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.articles$ = this.blogService.getFrontmatterData();
    // this.articles$ = this.blogService.;

    this.unpublishedArticles$ = this.blogService.getUnPublishedArticles();

    this.publishedArticles$ = this.blogService.getPublishedArticles();

    this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();

    this.unpublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();

    this.groupedByYearArticles$ = this.blogService.getGroupedByYearArticles();
    
    
  }

  getArticlesObservable(articles: Article[]): Observable<Article[]> {
    return of(articles);
  }

  getTabClasses(tab: 'published' | 'unpublished'): { [key: string]: boolean } {
    return {
      'bg-white text-yellow-400 font-semibold': this.activeTab === tab,
      'text-gray-500 hover:text-gray-700 bg-gray-100': this.activeTab !== tab,
    };
  }

  setActiveTab(tab: 'published' | 'unpublished'): void {
    this.activeTab = tab;
  }
  
}
