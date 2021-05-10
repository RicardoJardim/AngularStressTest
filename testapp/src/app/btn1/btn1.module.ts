import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Btn1Component } from './btn1.component';
import { ButtonComponent } from '../button/button.component';

import { Btn1PageRoutingModule } from './btn1-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonComponent, Btn1PageRoutingModule],
  declarations: [Btn1Component],
})
export class Btn1ComponentModule {}
