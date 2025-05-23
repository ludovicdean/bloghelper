import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tags-stats',
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './tags-stats.component.html',
  styleUrl: './tags-stats.component.css'
})
export class TagsStatsComponent {
@Input() tagsData$: Observable<Tag[]>;
@Input() publishedArticlesCount$: Observable<number>;

getPercentage(tag: { nombreArticles: number }, totalPublishedArticles: number): string {
  if (totalPublishedArticles === 0) {
        return '0%';
      }

  const percentage = (tag.nombreArticles / totalPublishedArticles) * 100;
  const roundedPercentage = Math.floor(percentage * 10) / 10; 

  return `${roundedPercentage.toFixed(1)}%`;
}
}
