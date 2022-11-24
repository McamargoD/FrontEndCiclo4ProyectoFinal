import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS = require("cryptojs");


@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'Usuario': ['', [Validators.required, Validators.email]],
    'Clave': ['',[Validators.required]]
  });
  
  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService){}

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["Usuario"].value;
    let clave = this.fgValidador.controls["Clave"].value;
    let claveCifrada = cryptoJS.MD5(clave);
    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
    
      // ok
      alert("Datos Correctos")
    }, (error: any) => {
      // ok
      alert("Datos Invalidos")
  })
}

}
