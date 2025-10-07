import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faqs-question',
  imports: [],
  templateUrl: './faqs-question.component.html',
  styleUrl: './faqs-question.component.css',
})
export class FaqsQuestionComponent {
  @Input() question: string = '';
  @Input() answer: string = '';
}
