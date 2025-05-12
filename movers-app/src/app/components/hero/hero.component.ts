import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeroComponent implements OnInit {
  showQuoteButton = true;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Remove auto-open of quote dialog
  }

  openQuoteDialog(): void {
    const dialogRef = this.dialog.open(QuoteFormComponent, {
      position: { top: '190px', left: '0px' },
      width: '550px',
      maxWidth: 'none',
      height: '500px',
      disableClose: true,
      hasBackdrop: false,
      panelClass: 'custom-dialog-panel',
    });
    this.showQuoteButton = false;
    dialogRef.afterClosed().subscribe(() => {
      this.showQuoteButton = true;
    });
  }
}
