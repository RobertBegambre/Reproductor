import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrPageRoutingModule } from './intr-routing.module';

import { IntrPage } from './intr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrPageRoutingModule
  ],
  declarations: [IntrPage]
})
export class IntrPageModule {}
