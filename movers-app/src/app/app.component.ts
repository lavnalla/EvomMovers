import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, RouterLinkActive, HeaderComponent, MatCardModule,      // Angular Material Card module
    MatToolbarModule,   // Angular Material Toolbar module
    MatButtonModule,    // Angular Material Button module
  ], // Import components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
