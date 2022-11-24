import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/Modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-nombre',
  templateUrl: './buscar-nombre.component.html',
  styleUrls: ['./buscar-nombre.component.css']
})
export class BuscarNombreComponent implements OnInit {

listadoRegistros: ModeloUsuario[] =[];


  constructor(private usuarioServicio: UsuarioService) {}


  ngOnInit(): void {
    
  }

  ObtenerListadoUsuarios (){
    this.usuarioServicio.ObternerRegistros().subscribe((datos: ModeloUsuario[]) => {
      this.listadoRegistros = datos;
    })

  }



  

}
