import { Component } from '@angular/core';
import { AuthorComponent } from '../author/author.component';

@Component({
  selector: 'app-unsplash',
  imports: [AuthorComponent],
  templateUrl: './unsplash.component.html',
  styleUrl: './unsplash.component.css',
  standalone: true
})
export class UnsplashComponent {

}
