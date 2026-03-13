import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Article } from './model/article';
import { environment } from '../env/env';
import { YearArticles } from './model/yearArticles';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private unPublishedArticlesData$: Observable<Article[]>;
  private groupedByYearArticles$: Observable<YearArticles[]>;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

    this.unPublishedArticlesData$ = this.http.get<Article[]>(this.baseUrl + 'api/unpublished.json');

    this.groupedByYearArticles$ = this.http.get<YearArticles[]>(this.baseUrl + 'api/published.json');
  }

  getUnPublishedArticles(): Observable<Article[]> { return this.unPublishedArticlesData$; }

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