import { ChangeDetectorRef, Component } from '@angular/core';
import { NavLinkComponent } from "../nav-link/nav-link.component";
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavLinkComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  isMenuOpen: boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  
  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
