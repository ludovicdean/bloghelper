import { Routes } from '@angular/router';
import { BlogHelperComponent } from './blog-helper/blog-helper.component';
import { TagsHelperComponent } from './tags-helper/tags-helper.component';
import { HomeComponent } from './home/home.component';
import { UnsplashComponent } from './unsplash/unsplash.component';
import { ImageConverterComponent } from './image-converter/image-converter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: BlogHelperComponent },
  { path: 'unsplash', component: UnsplashComponent },
  { path: 'tags', component: TagsHelperComponent },
  { path: 'test', component: ImageConverterComponent },
];
