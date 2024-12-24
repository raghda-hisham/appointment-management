export interface Appointment {
    id: number;
    dateTime: string;
    clientName: string;
    appointmentType: string;
    status: AppointmentStatus;
    location?: string; 
    notes?: string;     
  }

export enum AppointmentStatus{
    'Confirmed'='Confirmed',
    'Pending'='Pending',
    'Canceled'='Canceled'
}