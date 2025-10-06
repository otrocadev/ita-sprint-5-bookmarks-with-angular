import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExtensionComponent } from './download-extension.component';

describe('DownloadExtensionComponent', () => {
  let component: DownloadExtensionComponent;
  let fixture: ComponentFixture<DownloadExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadExtensionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 browser extension cards', () => {
    const cards = fixture.nativeElement.querySelectorAll(
      'app-browser-extension-card'
    );
    expect(cards.length).toBe(3);

    const chromeCard = cards[0];
    expect(chromeCard).toBeTruthy();
    expect(chromeCard.querySelector('h3').textContent).toContain(
      'Add to Chrome'
    );
    expect(chromeCard.querySelector('span').textContent).toContain(
      'Minimum version 62'
    );

    const firefoxCard = cards[1];
    expect(firefoxCard).toBeTruthy();
    expect(firefoxCard.querySelector('h3').textContent).toContain(
      'Add to Firefox'
    );
    expect(firefoxCard.querySelector('span').textContent).toContain(
      'Minimum version 55'
    );

    const operaCard = cards[2];
    expect(operaCard).toBeTruthy();
    expect(operaCard.querySelector('h3').textContent).toContain('Add to Opera');
    expect(operaCard.querySelector('span').textContent).toContain(
      'Minimum version 46'
    );
  });
});
