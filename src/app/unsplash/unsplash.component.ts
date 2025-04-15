import { Component, OnInit } from '@angular/core';
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
export class UnsplashComponent implements OnInit {
  activeTab: 'author' | 'imageConverter' = 'author';

  ngOnInit() {
    const savedTab = localStorage.getItem('activeTab') as 'author' | 'imageConverter';
    if (savedTab) {
      this.activeTab = savedTab;
    } else {
      this.setActiveTab('author');
    }

  }

  setActiveTab(tab: 'author' | 'imageConverter') {
    this.activeTab = tab;
    localStorage.setItem('activeTab', tab);
  }
}
