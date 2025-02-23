import { Component } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { ImageConverterComponent } from "../image-converter/image-converter.component";

@Component({
  selector: 'app-unsplash',
  imports: [AuthorComponent, ImageConverterComponent],
  templateUrl: './unsplash.component.html',
  styleUrl: './unsplash.component.css',
  standalone: true
})
export class UnsplashComponent {

}
