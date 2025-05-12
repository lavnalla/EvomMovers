import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuoteDialogComponent } from './quote-dialog/quote-dialog.component'; // Update path as needed

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openQuoteDialog();
  }

  openQuoteDialog(): void {
    this.dialog.open(QuoteDialogComponent, {
      disableClose: true, // Prevent closing by clicking outside or pressing ESC
      width: '500px'
    });
  }
}
