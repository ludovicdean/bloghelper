import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-link',
  imports: [],
  templateUrl: './image-link.component.html',
})
export class ImageLinkComponent {
@Input() logo: string | null;
@Input() link: string;
@Input() size: string | null;
}
