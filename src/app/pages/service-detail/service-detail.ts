import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SeoService } from '../../services/seo.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';

interface Section {
  title: string;
  text: string;
  image?: string;
  bulletPoints?: string[];
}

interface ServiceData {
  title: string;
  heroImage: string;
  metaDescription: string;
  intro: string;
  sections: Section[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);

  slug = '';
  service: ServiceData | null = null;

  private servicesContent: Record<string, ServiceData> = {
    monasteries: {
      title: 'Ancient Monasteries of Ladakh: Spiritual Heritage Guide',
      heroImage: '/extra/ladakh-thiksey.jpeg',
      metaDescription:
        'Explore the ancient Tibetan Buddhist monasteries of Leh Ladakh. Read our local guide on Thiksey, Hemis, and Diskit monasteries, visitor etiquette, and festivals.',
      intro:
        'Ladakh, often referred to as the "Land of High Passes," is home to some of the most spectacular Tibetan Buddhist monasteries in the world. Perched on rugged hilltops, these spiritual sanctuaries preserve centuries-old relics, frescoes, and Buddhist traditions. Golo Holidays brings you a local native guide to exploring these ancient treasures.',
      sections: [
        {
          title: "Thiksey Monastery: Resembling Tibet's Potala Palace",
          text: 'Belonging to the Gelugpa (Yellow Hat) sect, Thiksey is one of the most photographed monasteries in Ladakh. Resembling Tibet’s Potala Palace, it spans 12 stories and features the majestic 49-foot Maitreya (Future Buddha) statue, consecrated by the Dalai Lama in 1980. The temple offers an incredible view of the Indus valley.',
          image: '/extra/ladakh-thiksey.jpeg',
        },
        {
          title: 'Hemis Monastery: The Wealthiest Sanctuary',
          text: 'Hidden inside a quiet mountain gorge, Hemis is Ladakh’s wealthiest and largest monastery. Belonging to the Drukpa lineage, it hosts the famous annual Hemis Festival in June/July, celebrating Guru Padmasambhava with vibrant mask dances (Chams) and classical Tibetan musical instruments.',
          image: '/extra/hemis.jfif',
        },
        {
          title: 'Diskit Monastery: Overlooking Nubra Valley',
          text: 'Overlooking the Nubra sand dunes, Diskit is famous for the colossal 106-foot statue of Maitreya Buddha standing tall above the valley floor. It is the oldest monastery in the valley, dating back to the 14th century, and offers breathtaking panoramic views of the Shyok river basin.',
          image: '/extra/disktnunra.webp',
        },
        {
          title: 'Visitor Etiquette and Cultural Respect',
          text: 'When visiting these sacred Buddhist sites, please observe these local guidelines:',
          bulletPoints: [
            'Dress modestly: Keep shoulders and knees fully covered.',
            'Remove shoes: Always take off your footwear before entering inner prayer rooms and temples.',
            'Photography: Do not take photos inside active prayer rooms unless explicitly permitted.',
            'Clockwise movement: Walk around stupas, shrines, and prayer wheels in a clockwise direction.',
            'Silence: Maintain decorum and avoid speaking loudly or disrupting monks in prayer.',
          ],
        },
      ],
    },
    trekking: {
      title: 'Trekking in the Himalayas: Markha Valley & Alpine Trails',
      heroImage: '/extra/triop-lad.jpeg',
      metaDescription:
        'Embark on legendary Himalayan trekking expeditions with Golo Holidays. Local guides for Markha Valley, Kashmir Great Lakes, and Chadar frozen river treks.',
      intro:
        'Trekking in Ladakh and Kashmir is an experience like no other. Traverse deep river gorges, cross high-altitude mountain passes over 5,000 meters, and camp under the star-studded Himalayan skies. Whether you are a beginner or a veteran hiker, our native guides ensure high safety, premium food, and unmatched route layouts.',
      sections: [
        {
          title: 'Markha Valley Trek: The Classic Tea House Route',
          text: 'Our most popular trek in Ladakh. You will hike through traditional Ladakhi villages, stay in cozy homestays, cross the challenging Kongmaru La pass (17,060 ft), and get spectacular close-ups of Mt. Kang Yatse. It is the perfect blend of local culture and high-altitude hiking.',
          image: '/extra/triop-lad.jpeg',
        },
        {
          title: 'Kashmir Great Lakes Trek: The Alpine Dream',
          text: "Based in Srinagar, this trek takes you through green meadows, pine forests, and seven turquoise alpine lakes (Vishansar, Kishansar, Gadsar, Gangabal). It is widely regarded as India's most beautiful trek.",
          image: '/extra/tour-kashmir.jpeg',
        },
        {
          title: 'Chadar Trek: Walking on Frozen Water',
          text: 'The ultimate winter adventure. During January and February, the Zanskar River freezes into a thick sheet of ice. Hikers walk along this ice canyon, sleeping in caves and experience temperatures dipping to -30°C. Only recommended for physically fit adventure enthusiasts.',
          image: '/extra/road-ladakh.jpeg',
        },
        {
          title: 'Essential Trekking Preparation Guide',
          text: 'Himalayan trekking requires careful planning and physical cardiovascular fitness. We recommend:',
          bulletPoints: [
            'Start cardio training (running, swimming, cycling) 6 weeks before your trip.',
            'Acclimatize in Leh for at least 3 days before launching any high trek.',
            'Invest in high-quality broken-in hiking boots, thermal layers, and down jackets.',
            'Stay hydrated: Drink 4-5 liters of water daily while hiking.',
            'Always hire local guides who carry portable oxygen and medical supplies.',
          ],
        },
      ],
    },
    taxi: {
      title: 'Local Taxi Services & Standard Transport Rates',
      heroImage: '/extra/car-trip-ladakh.jpeg',
      metaDescription:
        'Rent a reliable, premium taxi with local drivers in Leh Ladakh, Spiti, and Srinagar. Transparent rates for Toyota Innova, Scorpio, and Tempo Travellers.',
      intro:
        'Navigating the steep mountain hairpins and high passes of the Himalayas requires immense driving expertise. Golo Holidays operates a fleet of high-ground-clearance SUVs (Toyota Innova, Scorpio, Mahindra XUV) and Tempo Travellers, all driven by native Ladakhi and Kashmiri drivers who have mastered these routes for decades.',
      sections: [
        {
          title: 'Why Book Taxi Services with Golo Holidays?',
          text: 'Our drivers are not just navigators—they are local guides, storytellers, and safety coordinators. All vehicles are equipped with emergency medical kits and portable oxygen. We manage all paperwork, including checkpoint permits for Nubra, Pangong, and restricted border zones.',
          image: '/extra/car-trip-ladakh.jpeg',
        },
        {
          title: 'Leh Ladakh Taxi Rates (Approximate Union Guides)',
          text: 'We maintain standard, competitive rates conforming to the Leh Taxi Union guidelines. Popular round-trip routes include:',
          bulletPoints: [
            'Leh to Nubra Valley via Khardung La (Round Trip): ₹9,500 - ₹12,500',
            'Leh to Pangong Lake via Chang La (Round Trip): ₹10,500 - ₹13,500',
            'Leh to Nubra Valley, Pangong Lake, and back to Leh (3 Days): ₹24,000 - ₹28,000',
            'Leh to Srinagar Highway drop (via Kargil): ₹16,000 - ₹19,000',
            'Manali to Leh Highway transfer (2 Days): ₹22,000 - ₹26,000',
          ],
        },
        {
          title: 'Premium Vehicle Comfort & Safety',
          text: 'Whether you are traveling as a couple or a large group, we have the right vehicle size. Our fleets undergo rigorous mechanical inspections before every mountain crossing. Our drivers have clean safety records and are trained in high-altitude rescue basics.',
          image: '/extra/road-ladakh.jpeg',
        },
      ],
    },
    'hotels-camping': {
      title: 'Himalayan Stays: Premium Hotels & Swiss Cottage Camps',
      heroImage: '/extra/hotel.jpg',
      metaDescription:
        'Stay comfortably in Leh Ladakh, Spiti, and Kashmir. Experience Swiss deluxe camps with attached baths at Pangong Lake and traditional homestays in Spiti.',
      intro:
        'Where you rest after a long day of traversing mountain roads is crucial for your high-altitude recovery. Golo Holidays partner with handpicked hotels, boutique guest houses, and deluxe camps to ensure cozy beds, hot running water, organic meals, and exceptional local hospitality.',
      sections: [
        {
          title: 'Premium Hotels in Leh and Srinagar',
          text: 'In Leh and Srinagar, we offer accommodations ranging from cozy local guest houses to modern 4-star boutique hotels. Features include central heating or electric blankets, reliable Wi-Fi, in-house laundry, and multi-cuisine restaurants serving local Kashmiri and Ladakhi dishes.',
          image: '/extra/hotel.jpg',
        },
        {
          title: 'Deluxe Swiss Camps at Pangong Lake & Nubra Valley',
          text: 'Experience luxury camping at 14,000 feet. In Pangong (Spangmik) and Nubra (Hunder), we operate premium Swiss Cottage Camps. Each tent is waterproof, wind-resistant, and includes comfortable double beds, attached tiled bathrooms with running hot water, and a cozy private veranda.',
          image: '/extra/WhatsApp Image 2025-10-15 at 4.50.07 PM (1).jpeg',
        },
        {
          title: 'Authentic Local Village Homestays',
          text: 'For travelers seeking deeper cultural immersion, particularly in Spiti Valley (Kaza, Langza) and remote Ladakh valleys (Turtuk, Sham Valley), we arrange stays in authentic local homestays. Share traditional meals, participate in farm activities, and experience genuine Himalayan lifestyle.',
          image: '/extra/WhatsApp Image 2025-10-15 at 4.50.07 PM (4).jpeg',
        },
      ],
    },
  };

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
      this.service = this.servicesContent[this.slug] || null;

      if (this.service) {
        this.seoService.generateTags({
          title: `${this.service.title} | Golo Holidays`,
          description: this.service.metaDescription,
          slug: `services/${this.slug}`,
        });
      }
    });
  }
}
