import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule for mat-card

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatCardModule],  // Ensure CommonModule and MatCardModule are imported
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'John Doe', feedback: 'Great service!' },
    { name: 'Jane Smith', feedback: 'Very professional.' },
    { name: 'Alice Johnson', feedback: 'Highly recommend them.' }
  ];
}
