import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../shared/animations/fade-in.animation';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  animations: [ fadeInAnimation ]
})
export class ReporteComponent implements OnInit {

  routerAnimation : Boolean = true;
  fechaReporte    : String  = '08-07-2017';
  tipoInusual     : Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  validarTipoReporte(tipo : Number){
    if ( tipo == 2 ) {
      this.tipoInusual = false;
    }
    else{
      this.tipoInusual = true;
    }
  }

}
