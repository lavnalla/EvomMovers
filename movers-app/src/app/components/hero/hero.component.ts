import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { QuoteFormComponent } from '../quote-form/quote-form.component'; // ✅ Make sure path is correct

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatDialogModule, QuoteFormComponent], // ✅ Don't forget QuoteFormComponent here
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private dialog: MatDialog) {}

  openQuoteDialog(): void {
    this.dialog.open(QuoteFormComponent, {
      width: '400px',
    });
  }
}
