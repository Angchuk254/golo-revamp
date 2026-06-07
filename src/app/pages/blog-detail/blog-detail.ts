import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Blog, TourPackage } from '../../models/types';
import { BLOGS, TOUR_PACKAGES } from '../../data/mock-data';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, BreadcrumbsComponent],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss',
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seoService = inject(SeoService);

  blog: Blog | undefined;
  recentBlogs: Blog[] = [];
  recommendedPackages: TourPackage[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.blog = BLOGS.find((b) => b.slug === slug);

        if (this.blog) {
          // Load recommended items
          this.recentBlogs = BLOGS.filter((b) => b.id !== this.blog?.id).slice(0, 3);

          // Match packages by category name (e.g. if blog is Ladakh, suggest Ladakh packages)
          const categoryLower = this.blog.category.toLowerCase();
          this.recommendedPackages = TOUR_PACKAGES.filter(
            (p) =>
              p.category.toLowerCase().includes(categoryLower) ||
              categoryLower.includes(p.category.toLowerCase()),
          ).slice(0, 2);

          this.setupSEO();
        } else {
          this.router.navigate(['/blog']);
        }
      }
    });
  }

  private setupSEO() {
    if (!this.blog) return;

    // JSON-LD Article Schema
    const schemaMarkup = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: this.blog.title,
      image: this.blog.image,
      datePublished: this.blog.date,
      author: {
        '@type': 'Person',
        name: this.blog.author,
      },
      description: this.blog.snippet,
    };

    this.seoService.generateTags({
      title: this.blog.title,
      description: this.blog.snippet,
      image: this.blog.image,
      slug: `blog/${this.blog.slug}`,
      type: 'article',
      schema: schemaMarkup,
    });
  }
}
