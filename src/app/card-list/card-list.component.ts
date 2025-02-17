import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-published-card-list',
  imports: [NgIf, NgFor, DatePipe, AsyncPipe],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
@Input() publishedArticles$: Observable<Article[]>;
}
