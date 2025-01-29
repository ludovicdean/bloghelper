import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Article } from './model/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  data: Observable<Article[]> | undefined;
  getFrontmatterData(): Observable<Article[]> {
    // return this.http.get<any[]>('http://ludovicdean.github.io/devendevenir/api/frontmatter.json');
    return this.http.get<Article[]>('http://localhost:4321/devendevenir/api/frontmatter.json');
  }

  getUnPublishedArticles(): Observable<Article[]>{
    const articles = this.getFrontmatterData();
    return articles.pipe(map(articles => articles.filter(article => article.date === undefined || article.date === null)));
  }

  getPublishedArticles(): Observable<Article[]>{
    const articles = this.getFrontmatterData();
    return articles.pipe(map(articles => articles.filter(article => article.date !== undefined)));
  }

  getPublishedArticlesCount(): Observable<number>{
    return this.getPublishedArticles().pipe(map(articles => articles.length));
  }

  getUnpublishedArticlesCount(): Observable<number>{
    return this.getUnPublishedArticles().pipe(map(articles => articles.length));
  }
}
