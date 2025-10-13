import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuComponent } from './mobile-menu.component';

describe('MobileMenuComponent', () => {
  let component: MobileMenuComponent;
  let fixture: ComponentFixture<MobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render burger buttonwhen the menu is closed', () => {
    const burgerButton =
      fixture.debugElement.nativeElement.querySelector('#bgr-logo');
    expect(burgerButton).toBeTruthy();
  });

  it('should render mobile menu when the menu is open', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();
    const mobileMenu =
      fixture.debugElement.nativeElement.querySelector('#mobile-menu');
    expect(mobileMenu).toBeTruthy();
  });
});
