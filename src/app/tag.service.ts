import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from './model/tag';
import { map, Observable } from 'rxjs';
import { environment } from '../env/env';
import { TagCount } from './model/tagCount';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  data: Observable<Tag[]> | undefined;
  baseUrl = environment.baseUrl;

  getTagsData(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl + 'api/tags.json').pipe(map(tags => tags.sort((a, b) => b.nombreArticles - a.nombreArticles)));
  }

  getTagsDataCount(): Observable<TagCount[]> {
    return this.http.get<TagCount[]>(this.baseUrl + 'api/tagcounts.json');
  }
}
