import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page3RoutingModule } from './page3-routing.module';
import { Page3Component } from './page3.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [Page3Component],
  imports: [CommonModule, Page3RoutingModule, ButtonModule],
})
export class Page3Module {}
