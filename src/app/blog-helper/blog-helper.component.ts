// import { Component, OnInit } from '@angular/core';
// import { BlogService, YearArticles } from '../blog.service';
// import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
// import { Article } from '../model/article';
// import { Observable, of } from 'rxjs';
// import { CardListComponent } from '../card-list/card-list.component';

// @Component({
//   imports: [AsyncPipe, CardListComponent, NgIf, NgFor, NgClass],
//   selector: 'app-blog-helper',
//   templateUrl: './blog-helper.component.html',
//   styleUrl: './blog-helper.component.css',
//     standalone: true,
// })
// export class BlogHelperComponent implements OnInit {
//   articles$: Observable<Article[]>;
//   unpublishedArticles$: Observable<Article[]>;
//   publishedArticles$: Observable<Article[]>;
//   publishedArticlesCount$: Observable<number>;
//   unpublishedArticlesCount$: Observable<number>;
//   lastArticleDate$: Observable<Date>;
//   groupedByYearArticles$: Observable<YearArticles[]>;
//   activeTab: 'published' | 'unpublished' = 'published';
  
//   constructor(private blogService: BlogService) {}

//   ngOnInit() {
//     this.articles$ = this.blogService.getFrontmatterData();
//     // this.articles$ = this.blogService.;

//     this.unpublishedArticles$ = this.blogService.getUnPublishedArticles();

//     this.publishedArticles$ = this.blogService.getPublishedArticles();

//     this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();

//     this.unpublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();

//     this.groupedByYearArticles$ = this.blogService.getGroupedByYearArticles();
    
    
//   }

//   getArticlesObservable(articles: Article[]): Observable<Article[]> {
//     return of(articles);
//   }

//   getTabClasses(tab: 'published' | 'unpublished'): { [key: string]: boolean } {
//     return {
//       'bg-white text-yellow-400 font-semibold': this.activeTab === tab,
//       'text-gray-500 hover:text-gray-700 bg-gray-100': this.activeTab !== tab,
//     };
//   }

//   setActiveTab(tab: 'published' | 'unpublished'): void {
//     this.activeTab = tab;
//   }
  
// }
// import { Component, OnInit } from '@angular/core';
// import { BlogService, YearArticles } from '../blog.service';
// import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
// import { Article } from '../model/article';
// import { Observable, of } from 'rxjs';
// import { CardListComponent } from '../card-list/card-list.component';

// @Component({
//   imports: [AsyncPipe, CardListComponent, NgIf, NgFor, NgClass],
//   selector: 'app-blog-helper',
//   templateUrl: './blog-helper.component.html',
//   styleUrl: './blog-helper.component.css',
//   standalone: true,
// })
// export class BlogHelperComponent implements OnInit {
//   articles$: Observable<Article[]>;
//   unpublishedArticles$: Observable<Article[]>;
//   publishedArticles$: Observable<Article[]>;
//   publishedArticlesCount$: Observable<number>;
//   unpublishedArticlesCount$: Observable<number>;
//   lastArticleDate$: Observable<Date>;
//   groupedByYearArticles$: Observable<YearArticles[]>;
//   activeTab: 'published' | 'unpublished' = 'published';

//   constructor(private blogService: BlogService) {}

//   ngOnInit() {
//     this.articles$ = this.blogService.getFrontmatterData();
//     this.unpublishedArticles$ = this.blogService.getUnPublishedArticles();
//     this.publishedArticles$ = this.blogService.getPublishedArticles();
//     this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();
//     this.unpublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
//     this.groupedByYearArticles$ = this.blogService.getGroupedByYearArticles();

//     // Récupérer l'onglet actif depuis le localStorage
//     const savedTab = localStorage.getItem('activeTab') as 'published' | 'unpublished' | null;
//     if (savedTab) {
//       this.activeTab = savedTab;
//     } else {
//       this.setActiveTab('published');
//     }
//   }

//   getArticlesObservable(articles: Article[]): Observable<Article[]> {
//     return of(articles);
//   }

//   getTabClasses(tab: 'published' | 'unpublished'): { [key: string]: boolean } {
//     return {
//       'bg-white text-yellow-400 font-semibold': this.activeTab === tab,
//       'text-gray-500 hover:text-gray-700 bg-gray-100': this.activeTab !== tab,
//     };
//   }

//   setActiveTab(tab: 'published' | 'unpublished'): void {
//     this.activeTab = tab;
//     localStorage.setItem('activeTab', tab);
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { BlogService, YearArticles } from '../blog.service';
// import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
// import { Article } from '../model/article';
// import { Observable, of } from 'rxjs';
// import { CardListComponent } from '../card-list/card-list.component';

// @Component({
//   imports: [AsyncPipe, CardListComponent, NgIf, NgFor, NgClass],
//   selector: 'app-blog-helper',
//   templateUrl: './blog-helper.component.html',
//   styleUrl: './blog-helper.component.css',
//   standalone: true,
// })
// export class BlogHelperComponent implements OnInit {
//   articles$: Observable<Article[]>;
//   unpublishedArticles$: Observable<Article[]>;
//   publishedArticles$: Observable<Article[]>;
//   publishedArticlesCount$: Observable<number>;
//   unpublishedArticlesCount$: Observable<number>;
//   lastArticleDate$: Observable<Date>;
//   groupedByYearArticles$: Observable<YearArticles[]>;
//   activeTab: 'published' | 'unpublished' = 'published'; // Défaut : "published"

//   constructor(private blogService: BlogService) {}

//   ngOnInit() {
//     this.articles$ = this.blogService.getFrontmatterData();
//     this.unpublishedArticles$ = this.blogService.getUnPublishedArticles();
//     this.publishedArticles$ = this.blogService.getPublishedArticles();
//     this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();
//     this.unpublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
//     this.groupedByYearArticles$ = this.blogService.getGroupedByYearArticles();

//     // Récupérer l'onglet actif depuis le localStorage
//     const savedTab = localStorage.getItem('activeTab') as 'published' | 'unpublished' | null;
//     if (savedTab) {
//       this.activeTab = savedTab; // Restaurer l'onglet sauvegardé
//     } else {
//       this.setActiveTab('published'); // Définir "published" comme valeur par défaut
//     }
//   }

//   getArticlesObservable(articles: Article[]): Observable<Article[]> {
//     return of(articles);
//   }

//   getTabClasses(tab: 'published' | 'unpublished'): { [key: string]: boolean } {
//     return {
//       'bg-white text-yellow-400 font-semibold': this.activeTab === tab,
//       'text-gray-500 hover:text-gray-700 bg-gray-100': this.activeTab !== tab,
//     };
//   }

//   setActiveTab(tab: 'published' | 'unpublished'): void {
//     this.activeTab = tab;
//     localStorage.setItem('activeTab', tab); // Sauvegarder l'onglet actif dans le localStorage
//   }
// }
import { Component, OnInit } from '@angular/core';
import { BlogService, YearArticles } from '../blog.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Article } from '../model/article';
import { Observable, of } from 'rxjs';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  imports: [AsyncPipe, CardListComponent, NgIf, NgFor, NgClass],
  selector: 'app-blog-helper',
  templateUrl: './blog-helper.component.html',
  styleUrl: './blog-helper.component.css',
  standalone: true,
})
export class BlogHelperComponent implements OnInit {
  articles$: Observable<Article[]>;
  unpublishedArticles$: Observable<Article[]>;
  publishedArticles$: Observable<Article[]>;
  publishedArticlesCount$: Observable<number>;
  unpublishedArticlesCount$: Observable<number>;
  lastArticleDate$: Observable<Date>;
  groupedByYearArticles$: Observable<YearArticles[]>;
  
  // Onglet actif par défaut : "published"
  bloghelperactiveTag: 'published' | 'unpublished' = 'published';

  constructor(private blogService: BlogService) {}

  ngOnInit() {

    // Récupérer l'onglet actif depuis le localStorage
    // const savedTab = localStorage.getItem('activeTab') as 'published' | 'unpublished' | null;
    // if (savedTab) {
    //   // Restaurer l'onglet sauvegardé
    //   this.bloghelperactiveTag = savedTab;
    // } else {
    //   // Définir "published" comme onglet actif par défaut
    //   this.setActiveTab('published');
    // }

    // Initialisation des données
    this.articles$ = this.blogService.getFrontmatterData();
    this.unpublishedArticles$ = this.blogService.getUnPublishedArticles();
    this.publishedArticles$ = this.blogService.getPublishedArticles();
    this.publishedArticlesCount$ = this.blogService.getPublishedArticlesCount();
    this.unpublishedArticlesCount$ = this.blogService.getUnpublishedArticlesCount();
    this.groupedByYearArticles$ = this.blogService.getGroupedByYearArticles();

  }

  getArticlesObservable(articles: Article[]): Observable<Article[]> {
    return of(articles);
  }

  getTabClasses(tab: 'published' | 'unpublished'): { [key: string]: boolean } {
    return {
      'bg-white text-yellow-400 font-semibold': this.bloghelperactiveTag === tab,
      'text-gray-500 hover:text-gray-800 bg-gray-100': this.bloghelperactiveTag !== tab,
    };
  }

  setActiveTab(tab: 'published' | 'unpublished'): void {
    // Mettre à jour l'état de l'onglet actif
    this.bloghelperactiveTag = tab;

    // Sauvegarder l'état dans le localStorage
    localStorage.setItem('activeTab', tab);
  }
}
