import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [TabsComponent],
})
export class TabsPageModule {}
