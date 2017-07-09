import { Component, OnInit } from '@angular/core';

import { Reporte } from './shared/reporte.model';
import { fadeInAnimation } from '../shared/animations/fade-in.animation';
import { ReporteService } from './shared/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  animations: [ fadeInAnimation ]
})
export class ReporteComponent implements OnInit {

  // Reporte vars
  routerAnimation : boolean = true;
  fechaReporte    : string  = '08-07-2017';
  disableConsulta : boolean = true;
  // Reporte model instance
  rm : Reporte = new Reporte();

  constructor(private rs : ReporteService) { }

  ngOnInit() {
    this.rs.saludo();
  }

  private validarTipoReporte(tipo : string) : void {
    this.rm.tipoReporte  = parseInt(tipo);
    this.disableConsulta = this.rm.tipoReporte === 1? false : true;
  }

  private validarTipoDenuncia(tipo : string) : void {
    this.rm.tipoDenuncia = parseInt(tipo);
  }

  private validarTipoTransaccion(tipo : string ) : void {
    this.rm.tipoTransaccion = parseInt(tipo);
  }

  private guardarReporte() : void {
    console.log(this.rm);
  }

}
