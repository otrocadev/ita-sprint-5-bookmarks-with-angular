import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponent } from './features.component';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the features nav', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const featuresNav = compiled.querySelector('#features-nav');
    expect(featuresNav).toBeTruthy();

    const menuElements = featuresNav?.querySelectorAll('.menu-element');
    expect(menuElements?.length).toBe(3);
    expect(menuElements?.[0].textContent).toContain('Simple Bookmarking');
    expect(menuElements?.[1].textContent).toContain('Speedy Searching');
    expect(menuElements?.[2].textContent).toContain('Easy Sharing');
  });
});
