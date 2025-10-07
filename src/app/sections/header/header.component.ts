import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { DesktopMenuComponent } from '../../molecules/desktop-menu/desktop-menu.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, DesktopMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
