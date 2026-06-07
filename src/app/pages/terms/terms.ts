import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './terms.html',
  styles: [
    `
      .terms-container {
        font-family: 'Inter', sans-serif;
        line-height: 1.7;
      }
    `,
  ],
})
export class TermsComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.generateTags({
      title: 'Terms & Conditions | Booking Policies',
      description:
        'Review our booking conditions, payment policies, cancellation guidelines, and medical acclimatization liabilities before traveling with Golo Holidays.',
      slug: 'terms',
    });
  }
}
