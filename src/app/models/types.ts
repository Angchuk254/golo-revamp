export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  duration: string;
  price: number;
  location: string;
  description: string;
  image: string;
  images: string[];
  category: 'ladakh' | 'spiti' | 'kashmir';
  featured: boolean;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  bestTime: string;
  bike?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  snippet: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  readTime: string;
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  packageId?: string;
  packageName?: string;
  travelDate?: string;
  guests?: number;
  message: string;
  status: 'Pending' | 'Contacted' | 'Closed';
  type: 'contact' | 'booking' | 'newsletter';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  packageTaken: string;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  subscribedAt: string;
}
