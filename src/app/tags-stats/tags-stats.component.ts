import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag';
import { AsyncPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { TagCount } from '../model/tagCount';

@Component({
  selector: 'app-tags-stats',
  imports: [NgIf, NgFor, AsyncPipe, TitleCasePipe],
  templateUrl: './tags-stats.component.html',
})
export class TagsStatsComponent {
  @Input() tagsData$: Observable<TagCount[]>;
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
