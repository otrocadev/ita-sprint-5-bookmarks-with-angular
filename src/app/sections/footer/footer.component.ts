import { Component } from '@angular/core';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';

@Component({
  selector: 'app-footer',
  imports: [SignUpFormComponent, FooterLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
