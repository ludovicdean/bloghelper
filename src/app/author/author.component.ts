import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-author',
  imports: [FormsModule, NgIf],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
  standalone: true,
})
export class AuthorComponent {
  textareaContent: string = '';
  name: string = '';
  link: string = '';
  picture: string = '';
  outputText: string = '';
  buttonText: string = 'Formater';

  onSubmit() {
    const result = this.extractImageInfo(this.textareaContent);
  }

  isTextareaEmpty(): boolean {
    return this.textareaContent.trim().length === 0;
  }

  extractImageInfo(input: string): void{
    const authorRegex = /<a href="([^"]+)">([^<]+)<\/a>/;
    const unsplashRegex = /<a href="([^"]+)">Unsplash<\/a>/;
  
    const authorMatch = input.match(authorRegex);
    const unsplashMatch = input.match(unsplashRegex);
  
    if (!authorMatch || !unsplashMatch) {
      throw new Error("Impossible de trouver les informations requises dans le texte d'entrée.");
    }

    const text: string = "author: \"" + authorMatch[2] + "\"\nauthorLink: \"" + authorMatch[1] + "\"\nunsplashLink: \"" + unsplashMatch[1] + "\"";

    navigator.clipboard.writeText(text)
    this.buttonText = 'C\'est prêt !';
  }
}
