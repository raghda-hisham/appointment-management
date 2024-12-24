import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledgemen-paget',
  templateUrl: './acknowledgement-page.component.html',
  styleUrls: ['./acknowledgement-page.component.scss']
})
export class AcknowledgementPageComponent {
  constructor(public router:Router){}

  public gotoAppointments():void{
    this.router.navigateByUrl('appointmentList')
  }
}
