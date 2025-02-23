import { ChangeDetectorRef, Component } from '@angular/core';
import { NavLinkComponent } from "../nav-link/nav-link.component";

@Component({
  selector: 'app-header',
  imports: [NavLinkComponent],
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
