import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from './model/tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {}

  data: Observable<Tag[]> | undefined;
  getTagsData(): Observable<Tag[]> {
    // return this.http.get<any[]>('http://ludovicdean.github.io/devendevenir/api/tags.json');
    return this.http.get<Tag[]>('http://localhost:4321/devendevenir/api/tags.json');
  }
}
