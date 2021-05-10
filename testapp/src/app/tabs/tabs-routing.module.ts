import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'btn1',
        loadChildren: () =>
          import('../btn1/btn1.module').then((m) => m.Btn1ComponentModule),
      },
      {
        path: 'btn2',
        loadChildren: () =>
          import('../btn2/btn2.module').then((m) => m.Btn2ComponentModule),
      },
      {
        path: 'btn3',
        loadChildren: () =>
          import('../btn3/btn3.module').then((m) => m.Btn3ComponentModule),
      },
      {
        path: '',
        redirectTo: '/tabs/btn1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/btn1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
