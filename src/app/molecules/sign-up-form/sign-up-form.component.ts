import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sign-up-form',
  imports: [FormsModule, NgClass],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
  emailInput = '';
  errorStatus = false;

  manageSubmit() {
    if (typeof this.emailInput !== 'string') {
      this.errorStatus = true;
      throw new Error('Email must be a string');
    }
    if (!this.emailInput.includes('@')) {
      this.errorStatus = true;
      throw new Error('Email must contain @');
    }
    if (!this.emailInput.includes('.')) {
      this.errorStatus = true;
      throw new Error('Email must contain .');
    }
    this.errorStatus = false;
  }
}
