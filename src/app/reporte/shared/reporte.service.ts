import { Injectable } from '@angular/core';

@Injectable()
export class ReporteService {

  constructor() { }

  public saludo() {
    console.log('Hola Mundo');
  }

}
