import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Btn3Component } from './btn3.component';
import { ButtonComponent } from '../button/button.component';

import { Btn3PageRoutingModule } from './btn3-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonComponent, Btn3PageRoutingModule],
  declarations: [Btn3Component],
})
export class Btn3ComponentModule {}
{
}
