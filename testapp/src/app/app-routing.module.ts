import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tab1',
    loadChildren: () =>
      import('./page1/page1.module').then((m) => m.Page1Module),
  },
  {
    path: 'tab2',
    loadChildren: () =>
      import('./page2/page2.module').then((m) => m.Page2Module),
  },
  {
    path: 'tab3',
    loadChildren: () =>
      import('./page3/page3.module').then((m) => m.Page3Module),
  },
  {
    path: '',
    redirectTo: '/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
