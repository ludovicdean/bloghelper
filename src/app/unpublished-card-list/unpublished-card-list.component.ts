import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-unpublished-card-list',
  imports: [NgFor, NgIf, DatePipe, AsyncPipe],
  templateUrl: './unpublished-card-list.component.html',
  styleUrl: './unpublished-card-list.component.css'
})
export class UnpublishedCardListComponent {
@Input() unpublishedArticles$: Observable<Article[]>;
}
