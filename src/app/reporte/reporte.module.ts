import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteComponent } from './reporte.component';
import { ReporteService } from './shared/reporte.service';


@NgModule({
  imports: [
    SharedModule,
    ReporteRoutingModule,
    FormsModule
  ],
  providers: [
    ReporteService
  ],
  declarations: [
    ReporteComponent
  ]
})
export class ReporteModule { }
