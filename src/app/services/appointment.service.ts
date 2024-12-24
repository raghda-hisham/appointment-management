import { Injectable } from '@angular/core';
import { Appointment, AppointmentStatus } from '../shared/models/appointment.model'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: Appointment[] = [
    { id: 1, dateTime: '2024-12-25 10:00', clientName: 'John Doe', appointmentType: 'Consultation', status: AppointmentStatus.Confirmed},
    { id: 2, dateTime: '2024-12-26 14:00', clientName: 'Jane Smith', appointmentType: 'Follow-up', status: AppointmentStatus.Canceled , location:'Egypt',notes:'Call me ' },
  ];

  private _appointmentsSubject: BehaviorSubject<Appointment[]> = new BehaviorSubject<Appointment[]>(this.appointments);

  get appointments$(): Observable<Appointment[]> {
    return this._appointmentsSubject.asObservable();
  }

  cancelAppointment(id: number): void {
    const index = this.appointments.findIndex((appointment) => appointment.id === id);
    if (index !== -1) {
      this.appointments[index].status = AppointmentStatus.Canceled;
      this._appointmentsSubject.next(this.appointments);
    }
  }
}
