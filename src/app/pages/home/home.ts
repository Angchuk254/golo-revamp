import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TourPackage, Blog, Testimonial } from '../../models/types';
import { TOUR_PACKAGES, BLOGS, TESTIMONIALS } from '../../data/mock-data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private seoService = inject(SeoService);

  featuredPackages: TourPackage[] = [];
  recentBlogs: Blog[] = [];
  testimonials: Testimonial[] = [];

  // Search Form parameters
  searchDestination = '';
  searchDuration = '';
  searchDifficulty = '';

  // Stats Counters
  stats = {
    happyTravelers: 1200,
    toursCompleted: 450,
    yearsExperience: 8,
    partnerHotels: 65,
  };

  ngOnInit() {
    // Load data
    this.featuredPackages = TOUR_PACKAGES.filter((p) => p.featured).slice(0, 3);
    this.recentBlogs = BLOGS.slice(0, 3);
    this.testimonials = TESTIMONIALS;

    // SEO Optimization
    this.seoService.generateTags({
      title: 'Leh Ladakh Tour Packages, Adventure Bike Trips & Leh Hotels',
      description:
        'Golo Holidays offers premium Leh Ladakh tour packages, high-altitude motorcycle bike trips, premium Leh hotels, Spiti Valley Jeep safaris, and custom Kashmir tours with local experts.',
      slug: '',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Golo Holidays',
        description:
          'Premium travel agency specializing in Ladakh, Spiti, and Kashmir tour packages.',
        url: 'https://goloholidays.com',
        telephone: '+91-7051415184',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tabasum Complex, Kargil, Opposite Jamia Masjid',
          addressLocality: 'Kargil',
          addressRegion: 'Ladakh',
          postalCode: '194103',
          country: 'India',
        },
      },
    });
  }

  onSearch() {
    this.router.navigate(['/packages'], {
      queryParams: {
        destination: this.searchDestination || null,
        duration: this.searchDuration || null,
        difficulty: this.searchDifficulty || null,
      },
    });
  }
}
