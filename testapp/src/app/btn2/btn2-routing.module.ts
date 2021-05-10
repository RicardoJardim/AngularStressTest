import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Btn2Component } from './btn2.component';

const routes: Routes = [
  {
    path: '',
    component: Btn2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Btn2PageRoutingModule {}
