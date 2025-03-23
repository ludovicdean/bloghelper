import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { Article } from './model/article';
import { environment } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private frontmatterData$: Observable<Article[]>;
  private publishedArticlesData$: Observable<Article[]>;
  private unPublishedArticlesData$: Observable<Article[]>;
  private groupedByYearArticles$: Observable<YearArticles[]>;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.frontmatterData$ = this.http.get<Article[]>(this.baseUrl + 'api/frontmatter.json').pipe(
      map(articles => articles.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())),
      shareReplay(1)
    );

    this.unPublishedArticlesData$ = this.http.get<Article[]>(this.baseUrl + 'api/unpublished.json');

    this.publishedArticlesData$ = this.frontmatterData$.pipe( map(articles => articles.filter(article => !article.id.startsWith('_'))) ); 

    this.groupedByYearArticles$ = this.http.get<YearArticles[]>(this.baseUrl + 'api/frontmatter.json');
  }

  getFrontmatterData(): Observable<Article[]>{ return this.frontmatterData$; }

  getUnPublishedArticles(): Observable<Article[]> { return this.unPublishedArticlesData$; }

  getPublishedArticles(): Observable<Article[]> { return this.publishedArticlesData$; }

  getUnpublishedArticlesCount(): Observable<number> { return this.unPublishedArticlesData$.pipe( map(articles => articles.length) ); }

  getLastArticleDate(): Observable<Date> { 
    return this.groupedByYearArticles$.pipe(
      map(groupedArticles => {
        if (groupedArticles.length === 0) {
          return null;
        }
        const latestYear = groupedArticles[0];
        if (latestYear.articles.length === 0) {
          return null;
        }
        return new Date(latestYear.articles[0].data.date);
      })
    );
  }

  getNextArticleDate(): Observable<Date> {
    return this.getLastArticleDate().pipe(
      map(lastArticleDate => {
        if (!lastArticleDate) {
          const defaultNextArticleDate = new Date();
          defaultNextArticleDate.setDate(defaultNextArticleDate.getDate() + 14);
          return defaultNextArticleDate;
        }

        const nextArticleDate = new Date(lastArticleDate);

        nextArticleDate.setDate(nextArticleDate.getDate() + 14);

        return nextArticleDate;
      })
    );
  }

  getGroupedByYearArticles(): Observable<YearArticles[]>{
    return this.groupedByYearArticles$;
  }

  getPublishedArticlesCount(): Observable<number> {
    return this.groupedByYearArticles$.pipe(
      map(groupedArticles => 
        groupedArticles.reduce((total, yearGroup) => total + yearGroup.articles.length, 0)
      )
    );
  }
}

export interface YearArticles {
  year: number;
  articles: Article[];
}