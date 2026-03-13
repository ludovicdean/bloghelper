import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-status-banner',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './blog-status-banner.component.html',
})
export class BlogStatusBannerComponent {
@Input() isLastArticleOld$: Observable<boolean>;
@Input() nextArticleDate$: Observable<Date>;


}
