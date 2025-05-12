import { Component } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    { title: 'Residential Moving', description: 'Stress-free home moves across Ontario.' },
    { title: 'Commercial Moving', description: 'Efficient business relocations.' },
    { title: 'Packing Services', description: 'We pack with care and quality materials.' },
    { title: 'Storage Solutions', description: 'Secure short- and long-term options.' }
  ];
}
