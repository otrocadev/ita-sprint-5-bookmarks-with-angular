import { Component } from '@angular/core';
import { BrowserExtensionCardComponent } from '../../molecules/browser-extension-card/browser-extension-card.component';

@Component({
  selector: 'app-download-extension',
  imports: [BrowserExtensionCardComponent],
  templateUrl: './download-extension.component.html',
  styleUrl: './download-extension.component.css',
})
export class DownloadExtensionComponent {}
