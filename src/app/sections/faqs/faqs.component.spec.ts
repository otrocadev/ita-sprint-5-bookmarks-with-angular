import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsComponent } from './faqs.component';

describe('FaqsComponent', () => {
  let component: FaqsComponent;
  let fixture: ComponentFixture<FaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the faqs title', () => {
    const compiled = fixture.nativeElement;
    const faqsSection = compiled.querySelector('#faqs');
    expect(faqsSection).toBeTruthy();
    expect(faqsSection.querySelector('h2')).toBeTruthy();
    expect(faqsSection.querySelector('h2').textContent).toContain(
      'Frequently Asked Questions'
    );
  });

  it('should render the faqs questions', () => {
    const compiled = fixture.nativeElement;
    const faqsSection = compiled.querySelector('#faqs');
    const questions = faqsSection.querySelectorAll('app-faqs-question');

    expect(faqsSection).toBeTruthy();
    expect(questions).toBeTruthy();
    expect(questions.length).toBe(4);

    expect(questions[0].querySelector('h3').textContent).toContain(
      'Why Bookmark?'
    );
    expect(questions[0].querySelector('p').textContent).toContain(
      'Bookmark is a browser extension which allows you to easily manage your bookmarks. The extension provides simple utilities including but not limited to: searching through your bookmarks, categorizing them into collections, sharing bookmarks and much more.'
    );
    expect(questions[1].querySelector('h3').textContent).toContain(
      'How can I request a new browser?'
    );
    expect(questions[1].querySelector('p').textContent).toContain(
      'We conduct frequent polls through our newsletter if you wish to voice your opinion on which browsers should be prioritized. We will almost always choose to work on the browsers that have the most demand.'
    );
    expect(questions[2].querySelector('h3').textContent).toContain(
      'Is there a mobile app?'
    );
    expect(questions[2].querySelector('p').textContent).toContain(
      `Currently there are no plans for developing a mobile app. However, if there is enough demand for it, we're definitely willing to develop one for you!`
    );
    expect(questions[3].querySelector('h3').textContent).toContain(
      'What about other Chromium browsers?'
    );
    expect(questions[3].querySelector('p').textContent).toContain(
      `We're hard at work in developing compatible extensions for other chromium browsers such as Microsoft Edge and Brave.`
    );
  });

  it('should render the faqs more info button', () => {
    const compiled = fixture.nativeElement;
    const faqsSection = compiled.querySelector('#faqs');
    const moreInfoButton = faqsSection.querySelector('app-button');
    expect(moreInfoButton).toBeTruthy();
    expect(moreInfoButton.textContent).toContain('More Info');
  });
});
