import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { TourPackage } from '../../models/types';
import { TOUR_PACKAGES } from '../../data/mock-data';
import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

interface DestinationInfo {
  name: string;
  slug: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  bestTime: string;
  temperature: string;
}

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, BreadcrumbsComponent],
  templateUrl: './destination.html',
  styleUrl: './destination.scss',
})
export class DestinationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seoService = inject(SeoService);

  destination: DestinationInfo | undefined;
  packages: TourPackage[] = [];

  private destinationsData: Record<string, DestinationInfo> = {
    ladakh: {
      name: 'Ladakh',
      slug: 'ladakh',
      tagline: 'Land of High Passes, Blue Lakes, and Grand Monasteries',
      image: '/extra/ladakh-main.jpeg',
      description:
        'Ladakh is a region administered by India as a union territory. It constitutes a part of the larger Kashmir region, which has been the subject of dispute between India, Pakistan, and China since 1947. Surrounded by the Karakoram and Himalayan mountains, it is known for its high-altitude cold desert terrain, pristine lakes like Pangong and Tso Moriri, and rich Tibetan Buddhist culture.',
      highlights: [
        "Drive through Khardung La, one of the world's highest motorable passes.",
        'Witness the magical color-changing waters of the saltwater Pangong Lake.',
        'Ride double-humped Bactrian camels on the high-altitude sand dunes of Hunder.',
        'Explore clifftop ancient monasteries like Thiksey, Hemis, and Diskit.',
      ],
      bestTime: 'May to October (Roads open in early June)',
      temperature: '15°C to 25°C (Daytime), -3°C to 5°C (Night)',
    },
    spiti: {
      name: 'Spiti Valley',
      slug: 'spiti',
      tagline: 'The Mystical Middle Land Nestled in the Cold Desert',
      image: '/extra/spiti-tour.jpeg',
      description:
        'Spiti Valley is a cold desert mountain valley located high in the Himalayas in the north-eastern part of the Indian state of Himachal Pradesh. The name "Spiti" means "The Middle Land", i.e. the land between Tibet and India. It is home to some of the most remote villages on Earth, centuries-old monasteries like Key and Tabo, and unmatched road adventures.',
      highlights: [
        'Visit Key Monastery, a magnificent multi-level fort-like structure on a hill.',
        "Post letters to your loved ones from Hikkim, the world's highest post office.",
        'Camp by the crescent-shaped sacred alpine lake, Chandratal (Lake of the Moon).',
        'Cross the Chicham Bridge, one of the highest suspension bridges in Asia.',
      ],
      bestTime: 'June to September (High mountain passes open in June)',
      temperature: '10°C to 18°C (Daytime), -5°C to 2°C (Night)',
    },
    kashmir: {
      name: 'Kashmir',
      slug: 'kashmir',
      tagline: 'Experience Heaven on Earth in the Alpine Valleys',
      image: '/extra/kashmir.jpeg',
      description:
        'Known globally as "Heaven on Earth", Kashmir is famous for its gushing rivers, snow-capped alpine peaks, lush green meadows, and warm hospitality. From the serene floating houseboats of Srinagar to the ski slopes of Gulmarg and trout fishing streams of Pahalgam, Kashmir is a timeless paradise for leisure travelers and adventure seekers alike.',
      highlights: [
        'Stay in a premium hand-carved wooden houseboat on Dal Lake or Nigeen Lake.',
        'Ride the Gulmarg Gondola Cable Car, one of the highest and longest in Asia.',
        'Explore Betaab and Aru Valleys, framed by towering pines and snow peaks in Pahalgam.',
        'Take a peaceful shikara boat ride at sunset through the floating vegetable markets.',
      ],
      bestTime: 'Year-round (April-Oct for greenery, Dec-March for winter snow)',
      temperature: '15°C to 28°C (Summer), -5°C to 8°C (Winter)',
    },
  };

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug && this.destinationsData[slug]) {
        this.destination = this.destinationsData[slug];

        // Filter packages belonging to this destination
        this.packages = TOUR_PACKAGES.filter((p) => p.category === slug);

        // Setup SEO
        this.seoService.generateTags({
          title: `${this.destination.name} Tour Packages | Travel Guide`,
          description: `Discover our specialized tour packages for ${this.destination.name}. ${this.destination.tagline}. View highlights, best time to visit and itinerary.`,
          image: this.destination.image,
          slug: `destinations/${slug}`,
        });
      } else {
        // Redirect to packages if category does not exist
        this.router.navigate(['/packages']);
      }
    });
  }
}
