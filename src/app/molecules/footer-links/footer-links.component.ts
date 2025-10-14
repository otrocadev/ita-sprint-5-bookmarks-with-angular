import { Component } from '@angular/core';
import { PageLinksComponent } from '../page-links/page-links.component';

@Component({
  selector: 'app-footer-links',
  imports: [PageLinksComponent],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.css',
})
export class FooterLinksComponent {}
