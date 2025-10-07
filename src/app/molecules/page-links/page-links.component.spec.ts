import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinksComponent } from './page-links.component';

describe('PageLinksComponent', () => {
  let component: PageLinksComponent;
  let fixture: ComponentFixture<PageLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render links', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(3);
  });

  it('should render links with the correct text', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links[0].textContent).toBe('FEATURES');
    expect(links[1].textContent).toBe('PRICING');
    expect(links[2].textContent).toBe('CONTACT');
  });
});
