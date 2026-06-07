import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getDatabase,
  ref as dbRef,
  push,
  set,
  onValue,
  update,
  remove,
  Database,
} from 'firebase/database';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  Auth,
  User,
} from 'firebase/auth';
import { environment } from '../../environments/environment';
import { Inquiry, NewsletterSubscription } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private platformId = inject<object>(PLATFORM_ID);

  private app!: FirebaseApp;
  private db!: Database;
  private auth!: Auth;
  private isBrowser: boolean;
  private isFirebaseEnabled = false;

  // Authentication State
  private currentUserSubject = new BehaviorSubject<any | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private authInitializedSubject = new BehaviorSubject<boolean>(false);
  public authInitialized$ = this.authInitializedSubject.asObservable();

  // Local storage mock inquiries (fallback)
  private mockInquiriesSubject = new BehaviorSubject<Inquiry[]>([]);
  private mockNewsletterSubject = new BehaviorSubject<NewsletterSubscription[]>([]);

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.initializeFirebase();
  }

  private initializeFirebase() {
    if (!this.isBrowser) {
      this.authInitializedSubject.next(true);
      return; // Server-side rendering (SSR) safety
    }

    try {
      const config = environment.firebase;
      const isPlaceholder =
        config.apiKey.includes('FakeKey') || config.databaseURL.includes('demo');

      if (!isPlaceholder) {
        if (!getApps().length) {
          this.app = initializeApp(config);
        } else {
          this.app = getApps()[0];
        }
        this.db = getDatabase(this.app);
        this.auth = getAuth(this.app);
        this.isFirebaseEnabled = true;

        // Monitor Auth State
        onAuthStateChanged(this.auth, (user) => {
          this.currentUserSubject.next(user);
          this.authInitializedSubject.next(true);
        });
        console.log('Firebase initialized successfully.');
      } else {
        console.log('Firebase configured with placeholder keys. Using LocalStorage fallback.');
        this.setupMockData();
      }
    } catch (e) {
      console.error('Firebase initialization failed, falling back to local storage mock.', e);
      this.setupMockData();
    }
  }

  private setupMockData() {
    this.isFirebaseEnabled = false;

    // Check if there is an existing local auth session
    if (this.isBrowser) {
      const savedUser = localStorage.getItem('golo_admin_session');
      if (savedUser) {
        this.currentUserSubject.next(JSON.parse(savedUser));
      }
    }
    this.authInitializedSubject.next(true);

    // Load mock inquiries
    const savedInquiries = localStorage.getItem('golo_inquiries');
    if (savedInquiries) {
      this.mockInquiriesSubject.next(JSON.parse(savedInquiries));
    } else {
      const initialInquiries: Inquiry[] = [
        {
          id: 'mock-1',
          name: 'Rajesh Kumar',
          email: 'rajesh.k@gmail.com',
          phone: '+91 98765 43210',
          packageName: 'Ultimate Ladakh Odyssey',
          packageId: 'ladakh-odyssey',
          travelDate: '2026-07-15',
          guests: 4,
          message:
            'We want to customize the itinerary to include Turtuk village. Please provide a revised quote.',
          status: 'Pending',
          type: 'booking',
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        },
        {
          id: 'mock-2',
          name: 'Sarah Jenkins',
          email: 'sarah.j@yahoo.com',
          phone: '+44 7911 123456',
          packageName: 'Spiti Valley Ultimate Jeep Safari',
          packageId: 'spiti-explorer',
          travelDate: '2026-08-05',
          guests: 2,
          message: 'Is it possible to hire a local English-speaking guide for the entire tour?',
          status: 'Contacted',
          type: 'booking',
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        },
        {
          id: 'mock-3',
          name: 'Amit Patel',
          email: 'amit.p@outlook.com',
          phone: '+91 87654 32109',
          message:
            'Interested in partner collaborations in Ladakh. Please have someone contact me.',
          status: 'Closed',
          type: 'contact',
          createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        },
      ];
      localStorage.setItem('golo_inquiries', JSON.stringify(initialInquiries));
      this.mockInquiriesSubject.next(initialInquiries);
    }

    // Load mock newsletter
    if (this.isBrowser) {
      const savedNewsletter = localStorage.getItem('golo_newsletter');
      if (savedNewsletter) {
        this.mockNewsletterSubject.next(JSON.parse(savedNewsletter));
      } else {
        const initialNewsletter: NewsletterSubscription[] = [
          {
            id: 'news-1',
            email: 'traveler.himalayas@gmail.com',
            subscribedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
          },
          {
            id: 'news-2',
            email: 'trekker.ladakh@yahoo.com',
            subscribedAt: new Date(Date.now() - 3600000 * 30).toISOString(),
          },
        ];
        localStorage.setItem('golo_newsletter', JSON.stringify(initialNewsletter));
        this.mockNewsletterSubject.next(initialNewsletter);
      }
    }
  }

  // --- DATABASE OPERATIONS ---

  submitInquiry(inquiry: Inquiry): Promise<void> {
    const newInquiry = {
      ...inquiry,
      createdAt: new Date().toISOString(),
      status: 'Pending' as const,
    };

    if (this.isFirebaseEnabled && this.db) {
      const inquiriesRef = dbRef(this.db, 'inquiries');
      const newInquiryRef = push(inquiriesRef);
      newInquiry.id = newInquiryRef.key || undefined;
      return set(newInquiryRef, newInquiry);
    } else {
      // Mock Fallback
      if (this.isBrowser) {
        const current = this.mockInquiriesSubject.value;
        newInquiry.id = 'mock-' + Math.random().toString(36).substr(2, 9);
        const updated = [newInquiry, ...current];
        localStorage.setItem('golo_inquiries', JSON.stringify(updated));
        this.mockInquiriesSubject.next(updated);
        return Promise.resolve();
      }
      return Promise.resolve();
    }
  }

  getInquiries(): Observable<Inquiry[]> {
    if (this.isFirebaseEnabled && this.db) {
      return new Observable<Inquiry[]>((observer) => {
        const inquiriesRef = dbRef(this.db, 'inquiries');
        const unsubscribe = onValue(
          inquiriesRef,
          (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const list = Object.keys(data)
                .map((key) => ({
                  id: key,
                  ...data[key],
                }))
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
              observer.next(list);
            } else {
              observer.next([]);
            }
          },
          (error) => {
            observer.error(error);
          },
        );

        return { unsubscribe };
      });
    } else {
      return this.mockInquiriesSubject.asObservable();
    }
  }

  updateInquiryStatus(id: string, status: 'Pending' | 'Contacted' | 'Closed'): Promise<void> {
    if (this.isFirebaseEnabled && this.db) {
      const inquiryRef = dbRef(this.db, `inquiries/${id}`);
      return update(inquiryRef, { status });
    } else {
      if (this.isBrowser) {
        const current = this.mockInquiriesSubject.value;
        const updated = current.map((item) => {
          if (item.id === id) {
            return { ...item, status };
          }
          return item;
        });
        localStorage.setItem('golo_inquiries', JSON.stringify(updated));
        this.mockInquiriesSubject.next(updated);
        return Promise.resolve();
      }
      return Promise.resolve();
    }
  }

  deleteInquiry(id: string): Promise<void> {
    if (this.isFirebaseEnabled && this.db) {
      const inquiryRef = dbRef(this.db, `inquiries/${id}`);
      return remove(inquiryRef);
    } else {
      if (this.isBrowser) {
        const current = this.mockInquiriesSubject.value;
        const updated = current.filter((item) => item.id !== id);
        localStorage.setItem('golo_inquiries', JSON.stringify(updated));
        this.mockInquiriesSubject.next(updated);
      }
      return Promise.resolve();
    }
  }

  submitNewsletter(email: string): Promise<void> {
    const subscription: NewsletterSubscription = {
      email,
      subscribedAt: new Date().toISOString(),
    };

    if (this.isFirebaseEnabled && this.db) {
      const newsRef = dbRef(this.db, 'newsletter');
      const newSubscriptionRef = push(newsRef);
      subscription.id = newSubscriptionRef.key || undefined;
      return set(newSubscriptionRef, subscription);
    } else {
      // Mock Fallback
      if (this.isBrowser) {
        const current = this.mockNewsletterSubject.value;
        // Avoid duplicate subscriptions in mock
        if (current.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
          return Promise.resolve();
        }
        subscription.id = 'news-' + Math.random().toString(36).substring(2, 11);
        const updated = [subscription, ...current];
        localStorage.setItem('golo_newsletter', JSON.stringify(updated));
        this.mockNewsletterSubject.next(updated);
      }
      return Promise.resolve();
    }
  }

  getNewsletterSubscriptions(): Observable<NewsletterSubscription[]> {
    if (this.isFirebaseEnabled && this.db) {
      return new Observable<NewsletterSubscription[]>((observer) => {
        const newsRef = dbRef(this.db, 'newsletter');
        const unsubscribe = onValue(
          newsRef,
          (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const list = Object.keys(data)
                .map((key) => ({
                  id: key,
                  ...data[key],
                }))
                .sort((a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime());
              observer.next(list);
            } else {
              observer.next([]);
            }
          },
          (error) => {
            observer.error(error);
          },
        );

        return { unsubscribe };
      });
    } else {
      return this.mockNewsletterSubject.asObservable();
    }
  }

  deleteNewsletterSubscription(id: string): Promise<void> {
    if (this.isFirebaseEnabled && this.db) {
      const subRef = dbRef(this.db, `newsletter/${id}`);
      return remove(subRef);
    } else {
      if (this.isBrowser) {
        const current = this.mockNewsletterSubject.value;
        const updated = current.filter((item) => item.id !== id);
        localStorage.setItem('golo_newsletter', JSON.stringify(updated));
        this.mockNewsletterSubject.next(updated);
      }
      return Promise.resolve();
    }
  }

  // --- AUTH OPERATIONS ---

  login(email: string, password: string): Promise<any> {
    if (this.isFirebaseEnabled && this.auth) {
      return signInWithEmailAndPassword(this.auth, email, password);
    } else {
      return Promise.reject(
        new Error('Firebase Authentication is not initialized. Please verify credentials.'),
      );
    }
  }

  logout(): Promise<void> {
    if (this.isFirebaseEnabled && this.auth) {
      return signOut(this.auth);
    } else {
      if (this.isBrowser) {
        localStorage.removeItem('golo_admin_session');
      }
      this.currentUserSubject.next(null);
      return Promise.resolve();
    }
  }

  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.currentUser$.subscribe((user) => {
        observer.next(!!user);
      });
    });
  }
}
