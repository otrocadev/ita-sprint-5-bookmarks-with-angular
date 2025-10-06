import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { FeaturesComponent } from './sections/features/features.component';
import { DownloadExtensionComponent } from './sections/download-extension/download-extension.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, FeaturesComponent, DownloadExtensionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sprint-5-bookmark-with-angular';
}
