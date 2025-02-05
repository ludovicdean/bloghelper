import { Routes } from '@angular/router';
import { BlogHelperComponent } from './blog-helper/blog-helper.component';
import { AuthorComponent } from './author/author.component';
import { TagsHelperComponent } from './tags-helper/tags-helper.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: BlogHelperComponent },
  { path: 'unsplash', component: AuthorComponent },
  { path: 'tags', component: TagsHelperComponent },
  { path: 'article', component: ArticlesComponent }
];
