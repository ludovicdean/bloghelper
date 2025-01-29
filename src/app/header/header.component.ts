import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
    this.cdr.detectChanges();
  }
}
