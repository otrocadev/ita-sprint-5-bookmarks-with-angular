import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FaqsQuestionComponent } from '../../molecules/faqs-question/faqs-question.component';

@Component({
  selector: 'app-faqs',
  imports: [ButtonComponent, FaqsQuestionComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {}
