import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteComponent } from './reporte.component';

@NgModule({
  imports: [
    SharedModule,
    ReporteRoutingModule
  ],
  declarations: [
    ReporteComponent
  ]
})
export class ReporteModule { }
