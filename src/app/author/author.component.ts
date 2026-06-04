import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './author.component.html',
})
export class AuthorComponent {
  textareaContent = '';
  buttonText = 'Formater';
  backgroundColor = false;

  onSubmit(): void {
    this.extractImageInfo(this.textareaContent);
  }

  isTextareaEmpty(): boolean {
    return this.textareaContent.trim().length === 0;
  }

  cleanUrl(url: string): string {
    const parsedUrl = new URL(url);
    parsedUrl.search = '';
    return parsedUrl.toString();
  }

  extractImageInfo(input: string): void {
    const authorRegex = /<a href="([^"]+)">([^<]+)<\/a>/;
    const unsplashRegex = /<a href="([^"]+)">Unsplash<\/a>/;

    const authorMatch = input.match(authorRegex);
    const unsplashMatch = input.match(unsplashRegex);

    if (!authorMatch || !unsplashMatch) {
      throw new Error("Impossible de trouver les informations requises dans le texte d'entrée.");
    }

    const authorName = authorMatch[2];
    const cleanAuthorLink = this.cleanUrl(authorMatch[1]);
    const cleanUnsplashLink = this.cleanUrl(unsplashMatch[1]);
    const photoId = this.getUnsplashPhotoId(cleanUnsplashLink);
    const authorSlug = this.slugify(authorName);

    const text = `author: "${authorName}" authorLink: "${cleanAuthorLink}"
      unsplashLink: "${cleanUnsplashLink}" banner: "/images/${authorSlug}-${photoId}-unsplash.webp"`;

    navigator.clipboard.writeText(text);

    this.backgroundColor = true;
    this.buttonText = "C'est prêt !";
  }

  slugify(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  getUnsplashPhotoId(url: string): string {
    const pathname = new URL(url).pathname;
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const parts = lastSegment.split('-');

    const idParts: string[] = [];

    for (let i = parts.length - 1; i >= 0; i--) {
      if (/[A-Z0-9]/.test(parts[i])) {
        idParts.unshift(parts[i]);
      } else {
        break;
      }
    }

    if (idParts.length === 0) {
      throw new Error("Impossible de récupérer l'identifiant de la photo Unsplash.");
    }

    return idParts.join('-');
  }
}