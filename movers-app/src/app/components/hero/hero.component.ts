import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatCardModule],  // Import MatCardModule here
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {}
