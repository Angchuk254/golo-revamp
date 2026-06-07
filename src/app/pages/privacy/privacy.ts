import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './privacy.html',
  styles: [
    `
      .privacy-container {
        font-family: 'Inter', sans-serif;
        line-height: 1.7;
      }
    `,
  ],
})
export class PrivacyComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.generateTags({
      title: 'Privacy Policy | Golo Holidays',
      description:
        'Our privacy policy details how we collect, store, and protect traveler booking information and contact form submissions.',
      slug: 'privacy',
    });
  }
}
