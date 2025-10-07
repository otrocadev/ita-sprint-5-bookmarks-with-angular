import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { PageLinksComponent } from '../page-links/page-links.component';

@Component({
  selector: 'app-desktop-menu',
  imports: [ButtonComponent, PageLinksComponent],
  templateUrl: './desktop-menu.component.html',
  styleUrl: './desktop-menu.component.css',
})
export class DesktopMenuComponent {}
