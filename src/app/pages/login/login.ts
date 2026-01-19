import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { Router } from '@angular/router'; // Necesario para navegar
import { Websocket } from '../../services/websocket';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Agregamos FormsModule aquí
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  nombre = '';

  constructor(
    private router: Router,
    public wsService: Websocket

    ) 
    {  } // Inyectamos el Router

  ngOnInit() {
    
  }


Ingresar() {
  if (this.nombre.trim().length === 0) { return; }

  // 1. Llamamos al servicio (que ahora devuelve una Promesa)
  this.wsService.loginWS(this.nombre).then(() => {
    
    // 2. Solo navegamos CUANDO el servidor ejecutó el callback
    console.log('Usuario ingresado y configurado en el servidor:', this.nombre);
    this.router.navigateByUrl('/mensajes'); 
    
  });
}

}

