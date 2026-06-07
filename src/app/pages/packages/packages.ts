import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TourPackage } from '../../models/types';
import { TOUR_PACKAGES } from '../../data/mock-data';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, FormsModule, BreadcrumbsComponent],
  templateUrl: './packages.html',
  styleUrl: './packages.scss',
})
export class PackagesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);

  allPackages: TourPackage[] = [];
  filteredPackages: TourPackage[] = [];

  // Filter Models
  selectedCategory = '';
  selectedDuration = '';
  selectedDifficulty = '';
  priceRange = 50000;

  ngOnInit() {
    this.allPackages = TOUR_PACKAGES;
    this.filteredPackages = [...this.allPackages];

    // Setup SEO
    this.seoService.generateTags({
      title: 'Ladakh Tour Packages, Bike Trips & Leh Hotels',
      description:
        'Choose from our curated Leh Ladakh tour packages, high-altitude motorcycle bike tours, boutique Leh hotel stays, and custom Himalayan road trips with native guides.',
      slug: 'packages',
    });

    // Check for query parameters
    this.route.queryParams.subscribe((params) => {
      if (params['destination']) {
        this.selectedCategory = params['destination'];
      }
      if (params['duration']) {
        this.selectedDuration = params['duration'];
      }
      if (params['difficulty']) {
        this.selectedDifficulty = params['difficulty'];
      }
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredPackages = this.allPackages.filter((pkg) => {
      // Category (Destination) Filter
      const matchCategory = !this.selectedCategory || pkg.category === this.selectedCategory;

      // Difficulty Filter
      const matchDifficulty =
        !this.selectedDifficulty || pkg.difficulty === this.selectedDifficulty;

      // Price Filter
      const matchPrice = pkg.price <= this.priceRange;

      // Duration Filter
      let matchDuration = true;
      if (this.selectedDuration) {
        const days = this.getDaysFromDuration(pkg.duration);
        if (this.selectedDuration === 'short') {
          matchDuration = days <= 6;
        } else if (this.selectedDuration === 'medium') {
          matchDuration = days >= 7 && days <= 9;
        } else if (this.selectedDuration === 'long') {
          matchDuration = days >= 10;
        }
      }

      return matchCategory && matchDifficulty && matchPrice && matchDuration;
    });
  }

  resetFilters() {
    this.selectedCategory = '';
    this.selectedDuration = '';
    this.selectedDifficulty = '';
    this.priceRange = 50000;
    this.filteredPackages = [...this.allPackages];
  }

  private getDaysFromDuration(durationStr: string): number {
    const match = durationStr.match(/(\d+)\s*Day/i);
    return match ? parseInt(match[1], 10) : 0;
  }
}
