import { Component, Input } from '@angular/core';
import { environment } from '../../env/env';

@Component({
  selector: 'app-card-link',
  imports: [],
  templateUrl: './card-link.component.html',
})
export class CardLinkComponent {
@Input() url?: string;
@Input() id: string;
@Input() context?: string;

baseUrl = environment.baseUrl;
}
