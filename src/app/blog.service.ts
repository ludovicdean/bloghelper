import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, first, map, Observable, shareReplay, tap } from 'rxjs';
import { Article } from './model/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  data: Observable<Article[]> | undefined;

  //changer type observable par Record<number, BlogArticle[]>
  getFrontmatterData(): Observable<Article[]> {
    // return this.http.get<any[]>('http://ludovicdean.github.io/devendevenir/api/frontmatter.json');
    return this.http.get<Article[]>('http://localhost:4321/devendevenir/api/frontmatter.json').pipe(
      map(articles => articles.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())),
      shareReplay(1)
    );
  }
  // getFrontmatterData(): Observable<Record<number, Article[]>> {
  //   // return this.http.get<any[]>('http://ludovicdean.github.io/devendevenir/api/frontmatter.json');
  //   return this.http.get<Record<number, Article[]>>('http://localhost:4321/devendevenir/api/frontmatter.json').pipe(
  //     // map(articles => articles.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())),
  //     shareReplay(1)
  //   );
  // }

  getUnPublishedArticles(): Observable<Article[]>{
    return this.getFrontmatterData().pipe(map(articles => articles.filter(article => article.id.startsWith('_'))));
  }

  getPublishedArticles(): Observable<Article[]>{
    return this.getFrontmatterData().pipe(map(articles => articles.filter(article => !article.id.startsWith('_'))));
  }

  getPublishedArticlesCount(): Observable<number>{
    return this.getPublishedArticles().pipe(map(articles => articles.length));
  }

  getUnpublishedArticlesCount(): Observable<number>{
    return this.getUnPublishedArticles().pipe(map(articles => articles.length));
  }

  getLastArticleDate(): Observable<Date>{
    return this.getPublishedArticles().pipe(
          first(),
          map(article => article[0].data.date)
        );
  }
}
