import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Inquiry, NewsletterSubscription } from '../../models/types';
import { FirebaseService } from '../../services/firebase.service';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [DatePipe, FormsModule, BreadcrumbsComponent],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  private firebaseService = inject(FirebaseService);
  private router = inject(Router);
  private seoService = inject(SeoService);

  inquiries: Inquiry[] = [];
  filteredInquiries: Inquiry[] = [];
  newsletterSubscriptions: NewsletterSubscription[] = [];

  // Search & Filter
  searchTerm = '';
  statusFilter = 'All'; // All | Pending | Contacted | Closed
  typeFilter = 'All'; // All | booking | contact | newsletter

  // Stats
  totalCount = 0;
  pendingCount = 0;
  processedCount = 0; // Stores 'Contacted' inquiries count
  bookingCount = 0;

  private sub: Subscription | undefined;
  private newsletterSub: Subscription | undefined;

  ngOnInit() {
    this.seoService.generateTags({
      title: 'Admin Dashboard | Management Panel',
      description: 'Review visitor booking inquiries and contact requests in real-time.',
      slug: 'admin/dashboard',
    });

    // Load Inquiries
    this.sub = this.firebaseService.getInquiries().subscribe({
      next: (data) => {
        // Sort newest first
        this.inquiries = data.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        this.calculateStats();
        this.applyFiltersAndSearch();
      },
      error: (err) => {
        console.error('Failed to load inquiries', err);
      },
    });

    // Load Newsletter Subscriptions
    this.newsletterSub = this.firebaseService.getNewsletterSubscriptions().subscribe({
      next: (data) => {
        this.newsletterSubscriptions = data.sort((a, b) => {
          return new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime();
        });
      },
      error: (err) => {
        console.error('Failed to load newsletter subscriptions', err);
      },
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.newsletterSub) {
      this.newsletterSub.unsubscribe();
    }
  }

  private calculateStats() {
    this.totalCount = this.inquiries.length;
    this.pendingCount = this.inquiries.filter((i) => i.status === 'Pending').length;
    this.processedCount = this.inquiries.filter((i) => i.status === 'Contacted').length;
    this.bookingCount = this.inquiries.filter((i) => i.type === 'booking').length;
  }

  applyFiltersAndSearch() {
    this.filteredInquiries = this.inquiries.filter((item) => {
      // 1. Search term match
      const nameMatch = item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const emailMatch = item.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const queryMatch = nameMatch || emailMatch;

      // 2. Status match
      const statusMatch = this.statusFilter === 'All' || item.status === this.statusFilter;

      // 3. Type match
      const typeMatch = this.typeFilter === 'All' || item.type === this.typeFilter;

      return queryMatch && statusMatch && typeMatch;
    });
  }

  updateStatus(id: string | undefined, newStatus: 'Pending' | 'Contacted' | 'Closed') {
    if (!id) return;
    this.firebaseService
      .updateInquiryStatus(id, newStatus)
      .then(() => {
        console.log('Status updated successfully');
      })
      .catch((err) => {
        console.error('Failed to update status', err);
      });
  }

  deleteInquiry(id: string | undefined) {
    if (!id) return;
    if (confirm('Are you sure you want to delete this record?')) {
      this.firebaseService
        .deleteInquiry(id)
        .then(() => {
          console.log('Record deleted successfully');
        })
        .catch((err) => {
          console.error('Failed to delete', err);
        });
    }
  }

  deleteNewsletter(id: string | undefined) {
    if (!id) return;
    if (confirm('Are you sure you want to delete this newsletter subscription?')) {
      this.firebaseService
        .deleteNewsletterSubscription(id)
        .then(() => {
          console.log('Newsletter subscription deleted successfully');
        })
        .catch((err) => {
          console.error('Failed to delete subscription', err);
        });
    }
  }

  onLogout() {
    this.firebaseService.logout().then(() => {
      this.router.navigate(['/admin/login']);
    });
  }
}
