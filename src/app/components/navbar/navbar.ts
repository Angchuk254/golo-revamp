import { Component, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { NgClass, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private platformId = inject<object>(PLATFORM_ID);
  private router = inject(Router);

  isMenuOpen = false;
  isScrolled = false;
  isHome = true;
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Check initial route in browser
    if (this.isBrowser) {
      this.isHome = this.router.url === '/' || this.router.url === '/index.html';
    }

    // Monitor URL changes
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHome = event.urlAfterRedirects === '/' || event.url === '/';
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isBrowser) {
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
}
