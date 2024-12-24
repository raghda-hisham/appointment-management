import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment, AppointmentStatus } from 'src/app/shared/models/appointment.model';
import { CancellationModalComponent } from 'src/app/shared/components/cancellation-modal/cancellation-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list-component.component.html',
  styleUrls: ['./appointment-list-component.component.scss'],
})
export class AppointmentListComponent {
  public appointments$ = this.AppointmentService.appointments$;
  public appointmentStatus=AppointmentStatus

  constructor(private AppointmentService: AppointmentService,public dialog: MatDialog,public router:Router) {}

  public cancelAppointment(id: number): void {
    
        const dialogRef = this.dialog.open(CancellationModalComponent);
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            // Handle cancellation confirmation
            this.AppointmentService.cancelAppointment(id);

            this.router.navigateByUrl('acknowledgement')
          } else {
            // Handle cancellation aborted
            console.log('Cancellation aborted');
          }
        });
      
  }
  public viewDetails(appointment: Appointment): void {
    this.router.navigate(['/appointment', appointment.id], {
      state: { appointment }, 
    });
  }
}
