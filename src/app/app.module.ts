import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppointmentDetailsComponent } from './components/appointment-details-component/appointment-details.component';
import { AppointmentListComponent } from './components/appointment-list-component/appointment-list-component.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    AppointmentDetailsComponent,
    AppointmentListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule, BrowserAnimationsModule,
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
