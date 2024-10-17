import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AProposRoutingModule } from './apropos-routing.module';
import { AProposComponent } from '../apropos/apropos.component';


@NgModule({
  declarations: [
    AProposComponent
  ],
  imports: [
    CommonModule,
    AProposRoutingModule
  ]
})
export class AProposModule { }
