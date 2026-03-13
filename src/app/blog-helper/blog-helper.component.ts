import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Article } from '../model/article';
import { Observable, of } from 'rxjs';
import { CardListComponent } from '../card-list/card-list.component';
import { YearArticles } from '../model/yearArticles';

@Component({
  imports: [AsyncPipe, CardListComponent, NgIf, NgFor, NgClass],
  selector: 'app-blog-helper',
  templateUrl: './blog-helper.component.html',
  standalone: true,
})

export class BlogHelperComponent implements OnInit {
  unpublishedArticles$: Observable<Article[]>;
  publishedArticles$: Observable<Article[]>;
  publishedArticlesCount$: Observable<number>;
  unpublishedArticlesCount$: Observable<number>;
  lastArticleDate$: Observable<Date>;
  groupedByYearArticles$: Observable<YearArticles[]>;
  
  bloghelperactiveTag: 'published' | 'unpublished' = 'published';

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.unpublishedArticles$ = this.blogService.getUnPublishedArticles();
    this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();
    this.unpublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
    this.groupedByYearArticles$ = this.blogService.getGroupedByYearArticles();
  }

  getArticlesObservable(articles: Article[]): Observable<Article[]> {
    return of(articles);
  }

  getTabClasses(tab: 'published' | 'unpublished'): { [key: string]: boolean } {
    return {
      'bg-white text-yellow-400 font-semibold': this.bloghelperactiveTag === tab,
      'text-gray-500 hover:text-gray-800 bg-gray-100': this.bloghelperactiveTag !== tab,
    };
  }

  setActiveTab(tab: 'published' | 'unpublished'): void {

    this.bloghelperactiveTag = tab;
    localStorage.setItem('activeTab', tab);
  }
}
