import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TourPackage } from '../../models/types';
import { TOUR_PACKAGES } from '../../data/mock-data';
import { SeoService } from '../../services/seo.service';
import { FirebaseService } from '../../services/firebase.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CurrencyPipe, ReactiveFormsModule, BreadcrumbsComponent],
  templateUrl: './package-detail.html',
  styleUrl: './package-detail.scss',
})
export class PackageDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);
  private firebaseService = inject(FirebaseService);

  package: TourPackage | undefined;
  activeImage = '';
  activeTab = 'itinerary'; // itinerary | inclusions | gallery

  // Inquiry Form
  bookingForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.package = TOUR_PACKAGES.find((p) => p.slug === slug);

        if (this.package) {
          this.activeImage = this.package.image;
          this.initializeForm();
          this.setupSEO();
        } else {
          // Redirect to packages if not found
          this.router.navigate(['/packages']);
        }
      }
    });
  }

  private initializeForm() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{10,15}$/)]],
      travelDate: ['', Validators.required],
      guests: [2, [Validators.required, Validators.min(1)]],
      message: [''],
    });
  }

  private setupSEO() {
    if (!this.package) return;

    // Structured Product / Travel Schema
    const schemaMarkup = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.package.title,
      image: this.package.image,
      description: this.package.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: this.package.price,
        availability: 'https://schema.org/InStock',
        url: `https://goloholidays.com/packages/${this.package.slug}`,
      },
    };

    this.seoService.generateTags({
      title: `${this.package.title} (${this.package.duration})`,
      description: this.package.description.substring(0, 155),
      image: this.package.image,
      slug: `packages/${this.package.slug}`,
      type: 'article',
      schema: schemaMarkup,
    });
  }

  changeActiveImage(imgUrl: string) {
    this.activeImage = imgUrl;
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  onSubmitInquiry() {
    if (this.bookingForm.invalid || !this.package) {
      // Mark all as touched to trigger validation messages
      this.bookingForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formValues = this.bookingForm.value;

    this.firebaseService
      .submitInquiry({
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        packageId: this.package.id,
        packageName: this.package.title,
        travelDate: formValues.travelDate,
        guests: formValues.guests,
        message: formValues.message || 'No additional message.',
        status: 'Pending',
        type: 'booking',
        createdAt: new Date().toISOString(),
      })
      .then(() => {
        this.submitSuccess = true;
        this.bookingForm.reset({ guests: 2 });
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
