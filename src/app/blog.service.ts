import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { Article } from './model/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private frontmatterData$: Observable<Article[]>;
  private publishedArticlesData$: Observable<Article[]>;
  private unPublishedArticlesData$: Observable<Article[]>;

  constructor(private http: HttpClient) {
    this.frontmatterData$ = this.http.get<Article[]>('http://ludovicdean.github.io/devendevenir/api/frontmatter.json').pipe(
      map(articles => articles.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())),
      shareReplay(1)
    );

    this.publishedArticlesData$ = this.frontmatterData$.pipe( map(articles => articles.filter(article => !article.id.startsWith('_'))) ); 

    this.unPublishedArticlesData$ = this.frontmatterData$.pipe( map(articles => articles.filter(article => article.id.startsWith('_'))) ); 
  }

  getFrontmatterData(): Observable<Article[]>{ return this.frontmatterData$; }

  getUnPublishedArticles(): Observable<Article[]> { return this.unPublishedArticlesData$; }

  getPublishedArticles(): Observable<Article[]> { return this.publishedArticlesData$; }

  getPublishedArticlesCount(): Observable<number> { return this.publishedArticlesData$.pipe( map(articles => articles.length) ); }

  getUnpublishedArticlesCount(): Observable<number> { return this.unPublishedArticlesData$.pipe( map(articles => articles.length) ); }

  getLastArticleDate(): Observable<Date> { return this.publishedArticlesData$.pipe( map(articles => articles[0]?.data.date) ); }
}
