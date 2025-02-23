import { Component, Input } from '@angular/core';
import { Article } from '../model/article';
import { DatePipe, NgClass, NgFor } from '@angular/common';
import { CardLinkComponent } from "../card-link/card-link.component";

@Component({
  selector: 'app-card',
  imports: [DatePipe, NgFor, NgClass, CardLinkComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() article: Article;
}
