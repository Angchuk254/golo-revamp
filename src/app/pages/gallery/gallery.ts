import { Component, OnInit, inject } from '@angular/core';

import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

interface GalleryItem {
  id: string;
  title: string;
  url: string;
  category: 'ladakh' | 'spiti' | 'kashmir' | 'culture' | 'adventure';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent implements OnInit {
  private seoService = inject(SeoService);

  galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Pangong Lake Sunset',
      url: '/extra/ladakh-pangong.jpeg',
      category: 'ladakh',
    },
    {
      id: '2',
      title: 'Basgo Monastery Ruins',
      url: '/extra/basgo-ladakh.jpeg',
      category: 'ladakh',
    },
    {
      id: '3',
      title: 'Thiksey Monastery Palace',
      url: '/extra/ladakh-thiksey.jpeg',
      category: 'ladakh',
    },
    { id: '4', title: 'Scenic Road to Leh', url: '/extra/road-ladakh.jpeg', category: 'adventure' },
    { id: '5', title: 'Key Monastery Spiti', url: '/extra/spiti-tour.jpeg', category: 'spiti' },
    {
      id: '6',
      title: 'Spiti Cold Desert Valley',
      url: '/extra/spiti-ladakh.jpeg',
      category: 'spiti',
    },
    { id: '7', title: 'Dal Lake Houseboat Stay', url: '/extra/kashmir.jpeg', category: 'kashmir' },
    {
      id: '8',
      title: 'Kashmir Valley Green Meadows',
      url: '/extra/kashmir-valley.jpeg',
      category: 'kashmir',
    },
    {
      id: '9',
      title: 'Tulip Garden Srinagar',
      url: '/extra/kasmir-package.jpeg',
      category: 'kashmir',
    },
    {
      id: '10',
      title: 'Ladakhi Native Culture',
      url: '/extra/culture-femlae.jpeg',
      category: 'culture',
    },
    { id: '11', title: 'Shanti Stupa Leh', url: '/extra/shanti.jfif', category: 'culture' },
    {
      id: '12',
      title: 'Buddha Statue Nubra',
      url: '/extra/statu-ladakh.jpeg',
      category: 'culture',
    },
    {
      id: '13',
      title: 'Bikers on Khardung La',
      url: '/extra/bike-ladakh.jpeg',
      category: 'adventure',
    },
    {
      id: '14',
      title: 'Motorcycle Tour Nubra',
      url: '/extra/bike-ladkah-leh.jpeg',
      category: 'adventure',
    },
    {
      id: '15',
      title: 'Royal Enfields by Pangong',
      url: '/extra/ladakh-bike-pangong.jpeg',
      category: 'adventure',
    },
    {
      id: '16',
      title: 'High Mountain Pass Crossing',
      url: '/extra/bikker.jpeg',
      category: 'adventure',
    },
  ];

  filteredItems: GalleryItem[] = [];
  selectedCategory = 'all';
  activeLightboxItem: GalleryItem | null = null;

  ngOnInit() {
    this.filteredItems = [...this.galleryItems];

    // SEO Optimization
    this.seoService.generateTags({
      title: 'Himalayan Photo Gallery | Ladakh, Spiti & Kashmir',
      description:
        'Explore stunning high-resolution photography of Ladakh lakes, Spiti cold deserts, Kashmir valleys, and rich Tibetan cultural festivals.',
      slug: 'gallery',
    });
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredItems = [...this.galleryItems];
    } else {
      this.filteredItems = this.galleryItems.filter((item) => item.category === category);
    }
  }

  openLightbox(item: GalleryItem) {
    this.activeLightboxItem = item;
  }

  closeLightbox() {
    this.activeLightboxItem = null;
  }
}
