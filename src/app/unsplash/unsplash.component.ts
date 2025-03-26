import { Component } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { ImageConverterComponent } from "../image-converter/image-converter.component";
import { CommonModule, NgClass, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-unsplash',
  imports: [AuthorComponent, ImageConverterComponent, NgClass, CommonModule, NgSwitch],
  templateUrl: './unsplash.component.html',
  styleUrl: './unsplash.component.css',
  standalone: true
})
export class UnsplashComponent {
  activeTab: 'author' | 'imageConverter' = 'author';

  setActiveTab(tab: 'author' | 'imageConverter') {
    this.activeTab = tab;
  }
}
