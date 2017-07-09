import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReporteComponent } from './reporte.component';

const reporteRoutes : Routes = [
  { path: '', component: ReporteComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(reporteRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReporteRoutingModule { }
