import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../Modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  ObtenerToken(): String {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { 

  }

Identificar(Usuario: string, Clave: string): Observable<ModeloIdentificar>{
  return this.http.post<ModeloIdentificar>('${this.url}/IdentificarUsuario', {
    usuario: Usuario,
    clave: Clave
  },{
    headers: new HttpHeaders({
      
    })

  })

}

AlmacenarSesion(datos: ModeloIdentificar) {
  let stringDatos = JSON.stringify(datos);
  localStorage.setItem("datosSesion",stringDatos);
}

ObternerInformacionSesion(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos;
  }else{
    return null;
  }
}

EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
}


}
