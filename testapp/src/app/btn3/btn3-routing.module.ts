import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Btn3Component } from './btn3.component';

const routes: Routes = [
  {
    path: '',
    component: Btn3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Btn3PageRoutingModule {}
