import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-page-links',
  imports: [NgClass],
  templateUrl: './page-links.component.html',
  styleUrl: './page-links.component.css',
})
export class PageLinksComponent {
  @Input() isDark = false;
}
