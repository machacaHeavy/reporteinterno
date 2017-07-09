import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReporteComponent } from './reporte/reporte.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes : Routes = [
  { path: '', loadChildren: './reporte/reporte.module#ReporteModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
