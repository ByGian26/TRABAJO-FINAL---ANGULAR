import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    //Crear instancia de UserServices
    constructor(private userService: UserservicesService){}

    // Crear objeto que se evniara a al api
    datos: Users = {id: '', name: '', username:''};

    onSubmit(){
    this.userService.postUser(this.datos).subscribe(
    (usuario: Users)=>console.log(usuario)
    );
    }
}
