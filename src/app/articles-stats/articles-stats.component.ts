import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles-stats',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './articles-stats.component.html',
  styleUrl: './articles-stats.component.css'
})
export class ArticlesStatsComponent {
  @Input() totalArticlesCount$: Observable<number>;
  @Input() publishedArticlesCount$: Observable<number>;
  @Input() unPublishedArticlesCount$: Observable<number>;
  @Input() lastArticleDate$: Observable<Date>;
  @Input() nextArticleDate$: Observable<Date>;
}
