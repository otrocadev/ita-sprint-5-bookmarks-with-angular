import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { FeaturesComponent } from './sections/features/features.component';
import { DownloadExtensionComponent } from './sections/download-extension/download-extension.component';
import { FaqsComponent } from './sections/faqs/faqs.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    FeaturesComponent,
    DownloadExtensionComponent,
    FaqsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sprint-5-bookmark-with-angular';
}
