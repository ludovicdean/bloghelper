import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { TagService } from '../tag.service';
import { map, Observable, combineLatest } from 'rxjs';
import { Tag } from '../model/tag';
import { TagsStatsComponent } from '../tags-stats/tags-stats.component';
import { ArticlesStatsComponent } from "../articles-stats/articles-stats.component";
import { WarningComponent } from '../warning/warning.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { UsefulLinksComponent } from "../useful-links/useful-links.component";

@Component({
  selector: 'app-home',
  imports: [TagsStatsComponent, ArticlesStatsComponent, WarningComponent, NgIf, AsyncPipe, UsefulLinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  publishedArticlesCount$: Observable<number>;
  unPublishedArticlesCount$: Observable<number>;
  tagsData$: Observable<Tag[]>;
  tagDataCount$: Observable<number>;
  test: Date;
  totalArticlesCount$: Observable<number>;
  lastArticleDate$: Observable<Date | null>;
  isLastArticleOld$: Observable<boolean>;
  tags: Tag[];
  constructor(private blogService: BlogService, private tagService: TagService){}

  ngOnInit(){
    this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();
    this.unPublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
    this.tagsData$ = this.tagService.getTagsData();
    this.tagDataCount$ = this.tagService.getTagsDataCount();

    this.totalArticlesCount$ = combineLatest([
      this.publishedArticlesCount$,
      this.unPublishedArticlesCount$
    ]).pipe(
      map(([published, unpublished]) => published + unpublished)
    );

    this.lastArticleDate$ = this.blogService.getLastArticleDate();
    
    this.isLastArticleOld$ = this.lastArticleDate$.pipe(
      map(lastArticleDate => {
        if (!lastArticleDate) {
          return false; // Pas d'articles, donc pas besoin d'afficher l'alerte
        }

        const oneWeekAgo = new Date().getTime() - 7*24*60*60*1000;
        const dateDernierArticle = (typeof lastArticleDate === 'string' ? new Date(lastArticleDate) : lastArticleDate).getTime();

        return dateDernierArticle < oneWeekAgo;
      })
    );
  }
}