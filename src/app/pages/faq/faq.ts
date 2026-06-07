import { Component, OnInit, inject } from '@angular/core';

import { FAQS } from '../../data/mock-data';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class FaqComponent implements OnInit {
  private seoService = inject(SeoService);

  faqs: FAQItem[] = [];

  ngOnInit() {
    this.faqs = FAQS.map((f) => ({ ...f, isOpen: false }));
    this.faqs[0].isOpen = true; // Open the first one by default

    // SEO Optimization
    this.seoService.generateTags({
      title: 'Himalayan Travel FAQs | Permits & Altitude Advice',
      description:
        'Frequently asked questions about traveling to Ladakh, Spiti, and Kashmir. Get expert advice on permits, packing list, mobile network, and acclimatization.',
      slug: 'faq',
    });
  }

  toggleFAQ(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
