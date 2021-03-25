import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private API_URL: string = 'http://localhost:4000/'

  constructor(private http: HttpClient) { }

  //Todo: Envio la informacion de los datos para crear reporte
  guardarReporte(carnet, nombre, curso, cuerpo) {
    const data = {carnet, nombre, curso, cuerpo}
    //return [{ok:true, msg:'Reporte creado', carnet: '1111', nombre: 'nombre1', curso: 'redes2', cuerpo: 'hola ke ace', servidor: '201213283'}]
    return this.http.post(`${this.API_URL}`,data);
  }

  //Todo Recibo los datos del usuario
  obtenerReportes(){
    return this.http.get(`${this.API_URL}`)
  }
}
