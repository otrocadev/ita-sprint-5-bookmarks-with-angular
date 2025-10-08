import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-feature-article',
  imports: [ButtonComponent],
  templateUrl: './feature-article.component.html',
  styleUrl: './feature-article.component.css',
})
export class FeatureArticleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
