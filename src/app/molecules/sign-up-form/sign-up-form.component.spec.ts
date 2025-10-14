import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an error if the email is not a string', () => {
    (component as any).emailInput = 123;
    expect(() => component.manageSubmit()).toThrowError(
      'Email must be a string'
    );
    expect(component.errorStatus).toBeTruthy();
  });

  it('should return an error if the email does not contain an @', () => {
    component.emailInput = 'test';
    expect(() => component.manageSubmit()).toThrowError('Email must contain @');
    expect(component.errorStatus).toBeTruthy();
  });

  it('should return an error if the email does not contain a .', () => {
    component.emailInput = 'test@';
    expect(() => component.manageSubmit()).toThrowError('Email must contain .');
    expect(component.errorStatus).toBeTruthy();
  });

  it('should validate email', () => {
    component.emailInput = 'test@test.com';
    expect(() => component.manageSubmit()).not.toThrowError();
    expect(component.errorStatus).toBeFalsy();
  });
});
