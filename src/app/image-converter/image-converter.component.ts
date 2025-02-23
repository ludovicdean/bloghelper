import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-converter',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image-converter.component.html',
  styleUrls: ['./image-converter.component.css']
})
export class ImageConverterComponent {
  @ViewChild('jpgImage') jpgImage: ElementRef;
  webpDataURL: SafeUrl = '';
  downloadLinkVisible: boolean = false;
  downloadFileName: string = 'image'; // Valeur par défaut pour éviter undefined

  constructor(private sanitizer: DomSanitizer) { }

  onFileSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.downloadFileName = file.name.substring(0, file.name.lastIndexOf('.'));

      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.jpgImage.nativeElement.src = event.target.result;

        this.jpgImage.nativeElement.onload = () => {

          const maxWidth = 1920;
          const maxHeight = 1080;

          let width = this.jpgImage.nativeElement.width;
          let height = this.jpgImage.nativeElement.height;

          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }

          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');

          ctx.drawImage(this.jpgImage.nativeElement, 0, 0, width, height);

          const quality = 0.6;

          const webpDataURL = canvas.toDataURL('image/webp', quality);

          this.webpDataURL = this.sanitizer.bypassSecurityTrustUrl(webpDataURL);

          this.downloadLinkVisible = true;
        };
      };

      reader.readAsDataURL(file);
    }
  }

  downloadWebP(): void {
    if (this.webpDataURL) {
      const link = document.createElement('a');
      link.href = this.webpDataURL as string;
      link.download = this.downloadFileName + ".webp";
      link.click();
    }
  }
}
