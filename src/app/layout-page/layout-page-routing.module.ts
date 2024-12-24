import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { AppointmentListComponent } from '../components/appointment-list-component/appointment-list-component.component';
import { AppointmentDetailsComponent } from '../components/appointment-details-component/appointment-details.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { AcknowledgementPageComponent } from '../components/acknowledgement-component/acknowledgement-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path:'',component:HomePageComponent},
      { path: 'appointmentList', component: AppointmentListComponent },
      { path: 'appointment/:id', component: AppointmentDetailsComponent },
      { path: 'acknowledgement', component: AcknowledgementPageComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutPageRoutingModule { }
