import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Btn1Component } from './btn1/btn1.component';
import { Btn2Component } from './btn2/btn2.component';
import { Btn3Component } from './btn3/btn3.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    Btn1Component,
    Btn2Component,
    Btn3Component,
    TabsComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
  exports: [
    Btn1Component,
    Btn2Component,
    Btn3Component,
    TabsComponent,
    ButtonComponent,
  ],
})
export class AppModule {}
