import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-browser-extension-card',
  imports: [ButtonComponent],
  templateUrl: './browser-extension-card.component.html',
  styleUrl: './browser-extension-card.component.css',
})
export class BrowserExtensionCardComponent {
  @Input() navigator = 'chrome';
  @Input() version = '62';
  @Input() url = 'https://www.google.com/chrome/';
}
