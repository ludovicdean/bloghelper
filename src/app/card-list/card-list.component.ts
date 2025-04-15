import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-list',
  imports: [NgIf, NgFor, AsyncPipe, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
@Input() articles$: Observable<Article[]>;
}
