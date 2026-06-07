import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject<Document>(DOCUMENT);
  private platformId = inject<object>(PLATFORM_ID);

  private readonly baseUrl = 'https://goloholidays.com';

  generateTags(config: {
    title: string;
    description: string;
    image?: string;
    slug?: string;
    type?: string;
    schema?: any;
  }) {
    const title = `${config.title} | Golo Holidays Ladakh`;
    const description = config.description;
    const image = config.image || 'https://goloholidays.com/extra/ladakh-main.jpeg';
    const url = config.slug ? `${this.baseUrl}/${config.slug}` : this.baseUrl;
    const type = config.type || 'website';

    // Set Title
    this.titleService.setTitle(title);

    // Set Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Leh Ladakh, Ladakh Tour, Ladakh Trip, Ladakh Bike Tour, Ladakh Hotels, Leh Hotels, Ladakh Travel Agency, Leh Ladakh Tour Packages, Best Ladakh Tours, Ladakh Tourism, Golo Holidays, Leh Ladakh Adventure, Ladakh Road Trip',
    });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:type', content: type });
    this.metaService.updateTag({ property: 'og:site_name', content: 'Golo Holidays' });

    // Twitter Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // Canonical Link
    this.setCanonicalUrl(url);

    // Schema Markup
    if (config.schema) {
      this.setSchema(config.schema);
    } else {
      // Default Organization Schema
      const defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Golo Holidays',
        image: image,
        url: this.baseUrl,
        telephone: '+91-7051415184',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tabasum Complex, Kargil, Opposite Jamia Masjid',
          addressLocality: 'Kargil',
          addressRegion: 'Ladakh',
          postalCode: '194103',
          addressCountry: 'IN',
        },
        priceRange: '$$',
        sameAs: [
          'https://www.facebook.com/people/golo-holidays/61579622687461/?sk=about',
          'https://www.instagram.com/lifewithgolo?igsh=YXMzYWE0MzVpeDJn&utm_source=qr',
        ],
      };
      this.setSchema(defaultSchema);
    }
  }

  private setCanonicalUrl(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', url);
      } else {
        link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        this.document.head.appendChild(link);
      }
    }
  }

  private setSchema(schema: any) {
    if (isPlatformBrowser(this.platformId)) {
      let script: HTMLScriptElement | null = this.document.querySelector(
        'script[type="application/ld+json"]',
      );
      if (script) {
        script.text = JSON.stringify(schema);
      } else {
        script = this.document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        this.document.head.appendChild(script);
      }
    }
  }
}
