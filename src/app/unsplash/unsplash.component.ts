import { Component } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { ImageConverterComponent } from "../image-converter/image-converter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unsplash',
  imports: [AuthorComponent, ImageConverterComponent, CommonModule],
  templateUrl: './unsplash.component.html',
  standalone: true
})
export class UnsplashComponent {
}

