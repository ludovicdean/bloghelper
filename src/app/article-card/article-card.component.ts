import { Component, Input } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Article } from '../model/article';


@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [DatePipe, NgFor, NgIf],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input() article: Article;

  isPublished(): boolean {
    return this.article.data.date !== undefined;
  }
}
