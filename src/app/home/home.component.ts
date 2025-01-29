import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { TagService } from '../tag.service';
import { map, Observable, tap, combineLatest } from 'rxjs';
import { Tag } from '../model/tag';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, NgIf, NgFor, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  publishedArticlesCount$: Observable<number>;
  unPublishedArticlesCount$: Observable<number>;
  tagsData$: Observable<Tag[]>;
  tagDataCount$: Observable<number>;
  test: number;
  totalArticlesCount$: Observable<number>;

  constructor(private blogService: BlogService, private tagService: TagService){}

  ngOnInit(){
    this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();
    this.unPublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
    this.tagsData$ = this.tagService.getTagsData().pipe(map(tags => tags.sort((a, b) => b.nombreArticles - a.nombreArticles)));
    this.tagDataCount$ = this.tagsData$.pipe(map(data => data.length));

    this.totalArticlesCount$ = combineLatest([
      this.publishedArticlesCount$,
      this.unPublishedArticlesCount$
    ]).pipe(
      map(([published, unpublished]) => published + unpublished)
    );
  }
  @Input() tags: Tag[];

  getPercentage(tag: { nombreArticles: number }): string {
    return `${(tag.nombreArticles / 32) * 100}%`;
  }

}