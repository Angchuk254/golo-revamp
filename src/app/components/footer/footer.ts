import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  private fb = inject(FormBuilder);
  private firebaseService = inject(FirebaseService);

  newsletterForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor() {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onNewsletterSubmit() {
    if (this.newsletterForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const email = this.newsletterForm.value.email;

    this.firebaseService
      .submitNewsletter(email)
      .then(() => {
        this.submitSuccess = true;
        this.newsletterForm.reset();
      })
      .catch((err) => {
        console.error(err);
        this.submitError = true;
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}
