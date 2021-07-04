import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigestorioPageRoutingModule } from './digestorio-routing.module';

import { DigestorioPage } from './digestorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigestorioPageRoutingModule
  ],
  declarations: [DigestorioPage]
})
export class DigestorioPageModule {}
