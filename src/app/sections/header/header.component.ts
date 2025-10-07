import { Component } from '@angular/core';
import { DesktopMenuComponent } from '../../molecules/desktop-menu/desktop-menu.component';

@Component({
  selector: 'app-header',
  imports: [DesktopMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
