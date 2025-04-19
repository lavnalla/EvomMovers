import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ This is the key part
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,       // ✅ Enables *ngFor, *ngIf, etc.
    MatCardModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { title: 'Local Moving', description: 'Fast and safe local moving services.' },
    { title: 'Long Distance', description: 'Reliable long distance moves.' },
    { title: 'Storage', description: 'Secure and flexible storage solutions.' }
  ];
}
