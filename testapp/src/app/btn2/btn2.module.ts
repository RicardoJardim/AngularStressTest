import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Btn2Component } from './btn2.component';
import { ButtonComponent } from '../button/button.component';

import { Btn2PageRoutingModule } from './btn2-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonComponent, Btn2PageRoutingModule],
  declarations: [Btn2Component],
})
export class Btn2ComponentModule {}
{
}
