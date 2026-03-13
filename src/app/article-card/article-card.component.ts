import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Article } from '../model/article';


@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() article: Article;

  isPublished(): boolean {
    return this.article.data.date !== undefined;
  }
}
