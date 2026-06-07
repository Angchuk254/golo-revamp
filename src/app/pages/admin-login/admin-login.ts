import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule, BreadcrumbsComponent],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.scss',
})
export class AdminLoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private firebaseService = inject(FirebaseService);
  private router = inject(Router);
  private seoService = inject(SeoService);

  loginForm!: FormGroup;
  isSubmitting = false;
  loginError = '';

  ngOnInit() {
    this.initializeForm();

    // Check if already authenticated, if yes redirect to dashboard
    this.firebaseService.currentUser$.subscribe((user) => {
      if (user) {
        this.router.navigate(['/admin/dashboard']);
      }
    });

    // SEO Optimization
    this.seoService.generateTags({
      title: 'Admin Portal Login',
      description: 'Authorized personnel login portal for Golo Holidays administrative functions.',
      slug: 'admin/login',
    });
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.loginError = '';

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.firebaseService
      .login(email, password)
      .then(() => {
        this.router.navigate(['/admin/dashboard']);
      })
      .catch((err: any) => {
        console.error(err);
        this.loginError = err.message || 'Login failed. Please try again.';
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}
