import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [Page2Component],
  imports: [CommonModule, Page2RoutingModule, ButtonModule],
})
export class Page2Module {}
