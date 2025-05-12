import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
// ... import other components

export const routes: Routes = [
  { path: '', component: HeroComponent }, // 👈 Show Hero by default
  { path: 'services', component: ServicesComponent },
  { path: 'quote', component: QuoteFormComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }, // optional: catch-all route
];
