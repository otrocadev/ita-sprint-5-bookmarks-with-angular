import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sprint-5-bookmark-with-angular';
}
