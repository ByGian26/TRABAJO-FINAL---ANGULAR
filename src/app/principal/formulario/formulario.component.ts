import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  //Crear instancia de UserServices
  constructor(private userService: UserservicesService) {}

  // Crear objeto que se evniara a al api
  datos = { nombre: '', email: '', mensaje: '' };
  errorNombre = '';
  errorEmail = '';
  errorMensaje = '';

  // funacion de validar formulario retorna true si es valido
  validarFormulario() {
    let valido = true;
    if (this.datos.nombre == '') {
      this.errorNombre = 'El nombre es requerido';
      valido = false;
    } else {
      this.errorNombre = '';
    }
    if (this.datos.email == '') {
      this.errorEmail = 'El email es requerido';
      valido = false;
    } else {
      this.errorEmail = '';
    }
    if (this.datos.mensaje == '') {
      this.errorMensaje = 'El mensaje es requerido';
      valido = false;
    } else {
      this.errorMensaje = '';
    }
    return valido;
  }

  enviarFormulario() {
    console.log(this.datos);
  }
}
