import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  formData = {
    fromAddress: '',
    toAddress: '',
    fullName: '',
    contactNo: '',
    email: '',
    movingDate: '',
    typeOfMove: ''
  };

  moveTypes = ['Residential', 'Commercial', 'Long Distance', 'Local']; // ✅ Add this

  constructor(public dialogRef: MatDialogRef<QuoteFormComponent>) {}

  onSubmit() {
    console.log(this.formData);
    this.dialogRef.close();
  }
}
