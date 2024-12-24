import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageRoutingModule } from './layout-page-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    LayoutPageRoutingModule,
    RouterModule,
    SharedModule,
  ],
  exports:[]
})
export class LayoutPageModule { }
