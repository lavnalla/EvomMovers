import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import emailjs from 'emailjs-com';

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
    const templateParams = {
      full_name: this.formData.fullName,
      from_address: this.formData.fromAddress,
      to_address: this.formData.toAddress,
      contact_no: this.formData.contactNo,
      email: this.formData.email,
      moving_date: this.formData.movingDate,
      type_of_move: this.formData.typeOfMove
    };

    emailjs.send(
      'service_xgishrf',      // from EmailJS dashboard
      'template_cbz3oc2',     // from EmailJS dashboard
      templateParams,
      'S7_ljquYJiOvUob7i'       // from EmailJS account settings
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Quote request sent successfully!');
      this.dialogRef.close(); // Close the dialog after successful submission
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send quote request. Please try again later.');
    });

    alert('Quote request finished!');
  }
}
