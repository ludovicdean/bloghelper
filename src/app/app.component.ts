import { Component } from '@angular/core';
import { AuthorComponent } from "./author/author.component";

@Component({
  selector: 'app-root',
  imports: [AuthorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bloghelper';
}
