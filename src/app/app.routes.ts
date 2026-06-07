import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PackagesComponent } from './pages/packages/packages';
import { PackageDetailComponent } from './pages/package-detail/package-detail';
import { DestinationComponent } from './pages/destination/destination';
import { BlogListComponent } from './pages/blog-list/blog-list';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { GalleryComponent } from './pages/gallery/gallery';
import { FaqComponent } from './pages/faq/faq';
import { PrivacyComponent } from './pages/privacy/privacy';
import { TermsComponent } from './pages/terms/terms';
import { AdminLoginComponent } from './pages/admin-login/admin-login';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard';
import { ServiceDetailComponent } from './pages/service-detail/service-detail';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'packages/:slug', component: PackageDetailComponent },
  { path: 'destinations/:slug', component: DestinationComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { 
    path: 'admin/dashboard', 
    component: AdminDashboardComponent, 
    canActivate: [adminGuard] 
  },
  { path: '**', redirectTo: '' }
];

