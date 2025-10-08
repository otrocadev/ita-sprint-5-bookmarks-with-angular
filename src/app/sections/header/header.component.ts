import { Component, HostListener } from '@angular/core';
import { DesktopMenuComponent } from '../../molecules/desktop-menu/desktop-menu.component';
import { MobileMenuComponent } from '../../molecules/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  imports: [DesktopMenuComponent, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDesktop = false;

  ngOnInit() {
    this.checkIsDesktop();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIsDesktop();
  }

  private checkIsDesktop() {
    this.isDesktop = window.innerWidth > 768;
  }
}
