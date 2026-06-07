import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, BreadcrumbsComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private firebaseService = inject(FirebaseService);
  private seoService = inject(SeoService);

  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  ngOnInit() {
    this.initializeForm();

    // SEO Optimization
    this.seoService.generateTags({
      title: 'Contact Golo Holidays | Ladakh Trips, Bike Tours & Hotel Bookings',
      description:
        'Contact local experts in Leh Ladakh for booking custom family tour packages, adventure bike trips, hotels in Leh, and inner line permits.',
      slug: 'contact',
    });
  }

  private initializeForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s-]{10,18}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formValues = this.contactForm.value;

    this.firebaseService
      .submitInquiry({
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        message: formValues.message,
        status: 'Pending',
        type: 'contact',
        createdAt: new Date().toISOString(),
      })
      .then(() => {
        this.submitSuccess = true;
        this.contactForm.reset();
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
