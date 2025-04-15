import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterLink, NgClass],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css'
})
export class NavLinkComponent {
@Input() route: string;
@Input() text: string;
@Input() isActive: boolean;
@Output() linkClicked = new EventEmitter<void>();

onLinkClicked() {
  this.linkClicked.emit();
}
}
