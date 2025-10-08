import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the main logo', () => {
    const mainLogo =
      fixture.debugElement.nativeElement.querySelector('#main-logo');
    expect(mainLogo).toBeTruthy();
  });

  it('should show desktop menu when resolution > 720px', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.isDesktop).toBe(true);

    const desktopMenu =
      fixture.debugElement.nativeElement.querySelector('app-desktop-menu');
    expect(desktopMenu).toBeTruthy();
  });

  it('should NOT show mobile menu when resolution > 720px', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.isDesktop).toBe(true);

    const mobileMenu =
      fixture.debugElement.nativeElement.querySelector('app-mobile-menu');
    expect(mobileMenu).toBeNull();
  });

  it('should show mobile menu when resolution < 720px', () => {
    Object.defineProperty(window, 'innerWidth', { value: 640 });
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.isDesktop).toBe(false);

    const mobileMenu =
      fixture.debugElement.nativeElement.querySelector('app-mobile-menu');
    expect(mobileMenu).toBeTruthy();
  });

  it('should NOT show desktop menu when resolution < 720px', () => {
    Object.defineProperty(window, 'innerWidth', { value: 640 });
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.isDesktop).toBe(false);

    const desktopMenu =
      fixture.debugElement.nativeElement.querySelector('app-desktop-menu');
    expect(desktopMenu).toBeNull();
  });
});
