import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';  // Import MatToolbarModule for mat-toolbar
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule if you're using mat-icon
import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule for buttons

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],  // Import necessary Material Modules here
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
