import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserExtensionCardComponent } from './browser-extension-card.component';

describe('BrowserExtensionCardComponent', () => {
  let component: BrowserExtensionCardComponent;
  let fixture: ComponentFixture<BrowserExtensionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserExtensionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserExtensionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
