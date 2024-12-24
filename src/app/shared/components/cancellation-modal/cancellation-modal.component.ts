import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancellation-modal',
  templateUrl: './cancellation-modal.component.html',
  styleUrls: ['./cancellation-modal.component.scss']
})
export class CancellationModalComponent {
  constructor(public dialogRef: MatDialogRef<CancellationModalComponent>,private router:Router) {}

  // Close the dialog without confirming
  onCancel(): void {
    this.dialogRef.close();
  }

  // Close the dialog and confirm the cancellation
  onConfirm(): void {
    this.router.navigateByUrl('./acknowledgement')
    this.dialogRef.close(true);
  }

}
