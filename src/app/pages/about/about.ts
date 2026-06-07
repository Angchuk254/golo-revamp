import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  team: TeamMember[] = [
    {
      name: 'Tashi Golo',
      role: 'Founder & Head Mountain Guide',
      image: '/extra/culture-femlae.jpeg', // Custom portrait
      bio: 'Born in Leh, Tashi has climbed major Himalayan peaks and guided expeditions for 15 years. He leads local policy and high-altitude safety.',
    },
    {
      name: 'Rigzin Dorjey',
      role: 'Co-Founder & Transport Coordinator',
      image: '/extra/bike-ladkah-leh.jpeg',
      bio: 'Rigzin manages our premium vehicle fleet, 4x4 off-road logistics, and permits. He has traversed the Srinagar-Manali highway over 400 times.',
    },
    {
      name: 'Zeba Khan',
      role: 'Lead Kashmir & Spiti Operations',
      image: '/extra/winter-kashmir.jpeg',
      bio: 'Zeba directs homestay partnerships, cultural walking tours, and family holidays in Srinagar, Gulmarg, and Spiti Valley Kaza.',
    },
  ];

  ngOnInit() {
    this.seoService.generateTags({
      title: 'About Golo Holidays | Native Ladakh Travel Agency & Guides',
      description:
        'Learn about Golo Holidays, a premium Leh Ladakh travel agency founded by native mountain guides. Discover our expertise in bike trips, custom tours, and hotel stays.',
      slug: 'about',
    });
  }
}
