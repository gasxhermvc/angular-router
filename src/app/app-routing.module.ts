import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobLayoutComponent } from './layouts/job-layout/job-layout.component';

const routes: Routes = [
  {
    path: '',
    component: JobLayoutComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'companies',
    component: JobLayoutComponent,
    loadChildren: () =>
      import('./pages/company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'search',
    component: JobLayoutComponent,
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: '**',
    component: JobLayoutComponent,
    loadChildren: () =>
      import('./pages/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
