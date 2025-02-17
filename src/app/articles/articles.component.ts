import { Component, numberAttribute, OnInit } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, DatePipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-articles',
  imports: [NgIf, AsyncPipe, NgFor, KeyValuePipe, DatePipe],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
blogEntries$: Observable<YearSortedData>;

constructor(private http: HttpClient) {
  
}
  ngOnInit(): void {
    this.blogEntries$ = this.getBlogEntries();
  }

getBlogEntries(): Observable<YearSortedData> {
  return this.http.get<YearSortedData>('http://localhost:4321/devendevenir/api/front.json').pipe(
    map(yearSortedData => {
      Object.keys(yearSortedData).forEach(year => {
        yearSortedData[year].sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
      });
      
      // Créer un nouvel objet avec les années triées par ordre décroissant
      return Object.fromEntries(
        Object.entries(yearSortedData)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      );
    }),
    tap(entries => console.log(entries))
  );
}
}


export interface BlogEntry{
  id: string;
  data: {
    title: string;
    description: string;
    date: Date;
    updatedDate: Date;
    banner: string;
    author: string;
    authorlink: string;
    unsplashlink: string;
    isArticle: boolean;
    tags: string[];
    };
  year: number;
}

export type YearSortedData = Record<number, BlogEntry[]>;