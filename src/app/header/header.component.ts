import { ChangeDetectorRef, Component } from '@angular/core';
import { NavLinkComponent } from "../nav-link/nav-link.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
    this.cdr.detectChanges();
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
