import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';  // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button';    // Import MatButtonModule for buttons

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],  // Import necessary Material Modules here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
