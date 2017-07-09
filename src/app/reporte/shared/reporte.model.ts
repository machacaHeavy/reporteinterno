export class Reporte 
{
  tipoReporte : Number;
  claveOperacion : String;
  tipoTransaccion : Number;
  primerNombre : String;
  segundoNombre : String;
  primerApellido : String;
  segundoApellido : String;
  descripcionReporte : String;
  reporteAnonimo : Boolean;
  numeroTienda : Number;
  numeroEmpleado : Number;
  fechaOperacion : String;
  tipoDenuncia : Number;

  constructor(){}

  public validarReporte(done) : Array<any>{
    
    const fields = [];

    if ( this.tipoReporte === null || this.tipoReporte === 0 ) {
      fields.push({
        field   : 'Tipo de reporte',
        message : 'El campo tipo de reporte es obligatorio'
      });
      return fields;
    }
    else if( this.tipoReporte === 1 ) {
      // Inusual
      this.validarReporteInusual((error, fields) => {
        if ( error ) {
          return done(fields);
        }
        return done(null);
      });
    }
    else{
      // Preocupante
      this.validarReportePreocupante((error, fields) => {
        if ( error ) {
          return done(fields);
        }
        return done(null);
      });
    }

  }

  // Parámetros:
  // Tipo de reporte (Inusual, value="1"), Clave de operación (números, sin espacios, 19 dígitos).
  // Tipo de operación (Envío Dinero Ya, Pago Dinero Ya, Cancelación Dinero Ya, 
  // Envío MoneyGram, Pago MoneyGram y Cancelación MoneyGram).
  // Fecha de operación, Número de tienda.
  // Primer nombre, segundo nombre, primer apellido, segundo apellido.
  private validarReporteInusual(done) : void {
    const fields = [];
    
    if ( this.tipoReporte !== 1 ) {
      fields.push({
        field   : 'Tipo de reporte',
        message : 'El campo tipo reporte es obligatorio'
      });
    }
    if ( this.claveOperacion === null || this.claveOperacion === '' ) {
      fields.push({
        field   : 'Clave de operación',
        message : 'El campo clave de operación es obligatorio'
      });
    }
    if ( this.tipoTransaccion === null || this.tipoTransaccion === 0 ) {
      fields.push({
        field   : 'Tipo de operación',
        message : 'El campo tipo de operación es obligatorio'
      });
    }
    if ( this.fechaOperacion === null || this.fechaOperacion === '' ) {
      fields.push({
        field   : 'Fecha de operación',
        message : 'El campo fecha de operación es obligatorio'
      });
    }
    if ( this.numeroTienda === null || this.numeroTienda === 0 ) {
      fields.push({
        field   : 'Número de tienda',
        message : 'El campo número de tienda es obligatorio'
      });
    }
    if ( this.primerNombre === null || this.primerNombre === '' ) {
      fields.push({
        field   : 'Primer nombre',
        message : 'El campo primer nombre es obligatorio'
      });
    }
    if ( this.primerApellido === null || this.primerApellido === '' ) {
      fields.push({
        field   : 'Primer apellido',
        message : 'El campo primer apellido es obligatorio'
      });
    }

    return fields.length > 0 ? done(true, fields) : done(false, null);

  }

  // Parámetros: 
  // Tipo de reporte (Preocupante, value = "2"), Primer nombre 
  // Segundo Nombre, Primer Apellido, Segundo Apellido
  // Fecha de operación, Descripción de la actividad a reportar.
  private validarReportePreocupante(done) : void {

    const fields = [];

    if ( this.tipoReporte !== 2 ) {
      fields.push({
        field : 'Tipo de reporte',
        message : 'El tipo de reporte es incorrecto'
      });
    }
    if ( this.primerNombre === null || this.primerNombre === '' ) {
      fields.push({
        field : 'Primer nombre',
        message : 'El campo primer nombre es obligatorio'
      });
    }
    if ( this.primerApellido === null || this.primerApellido === '' ) {
      fields.push({
        field : 'Primer apellido',
        message : 'El campo primer apellido es obligatorio'
      });
    }

    return fields.length > 0 ? done(true, fields) : done(false, null);

  }



}