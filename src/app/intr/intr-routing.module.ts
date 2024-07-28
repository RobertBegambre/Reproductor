import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrPage } from './intr.page';

const routes: Routes = [
  {
    path: '',
    component: IntrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrPageRoutingModule {}
