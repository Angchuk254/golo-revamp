import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Blog } from '../../models/types';
import { BLOGS } from '../../data/mock-data';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogListComponent implements OnInit {
  private seoService = inject(SeoService);

  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  selectedCategory = 'All';
  categories: string[] = ['All', 'Ladakh', 'Spiti Valley', 'Kashmir', 'Travel Tips'];

  ngOnInit() {
    this.blogs = BLOGS;
    this.filteredBlogs = [...this.blogs];

    // SEO Optimization
    this.seoService.generateTags({
      title: 'Himalayan Travel Blog | Golo Holidays',
      description:
        'Expert travel tips, guides, acclimatization advice, and stories from Ladakh, Spiti Valley, and Kashmir written by locals.',
      slug: 'blog',
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredBlogs = [...this.blogs];
    } else {
      this.filteredBlogs = this.blogs.filter(
        (blog) =>
          blog.category.toLowerCase().includes(category.toLowerCase()) ||
          blog.tags.some((tag) => tag.toLowerCase() === category.toLowerCase()),
      );
    }
  }
}
