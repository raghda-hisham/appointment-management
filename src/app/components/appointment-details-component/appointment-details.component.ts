import { Component, Input } from '@angular/core';
import { Appointment } from '../../shared/models/appointment.model';
import { MatDialog } from '@angular/material/dialog';
import { CancellationModalComponent } from 'src/app/shared/components/cancellation-modal/cancellation-modal.component';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: 'appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent {
  public appointment!: Appointment;
  constructor(public dialog: MatDialog,public router:Router,public appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointment = history.state.appointment;
  }
  // Open the cancellation dialog
  public openCancelDialog(id:number): void {
    const dialogRef = this.dialog.open(CancellationModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle cancellation confirmation
        this.appointmentService.cancelAppointment(id);

        this.router.navigateByUrl('acknowledgement')
      } else {
        // Handle cancellation aborted
        console.log('Cancellation aborted');
      }
    });
  }
}