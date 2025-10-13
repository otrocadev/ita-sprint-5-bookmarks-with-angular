import { Component } from '@angular/core';
import { FeatureArticleComponent } from '../../molecules/feature-article/feature-article.component';
import { featuresData } from '../../data/featuresData';

@Component({
  selector: 'app-features',
  imports: [FeatureArticleComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  selectedFeature = 'simple-bookmarking';
  featuresData = featuresData;
}
