import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Btn1Component } from './btn1.component';

const routes: Routes = [
  {
    path: '',
    component: Btn1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Btn1PageRoutingModule {}
