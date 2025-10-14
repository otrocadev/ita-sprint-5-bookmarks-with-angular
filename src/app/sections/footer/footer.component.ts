import { Component } from '@angular/core';
import { SignUpFormComponent } from '../../molecules/sign-up-form/sign-up-form.component';
import { FooterLinksComponent } from '../../molecules/footer-links/footer-links.component';

@Component({
  selector: 'app-footer',
  imports: [SignUpFormComponent, FooterLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
