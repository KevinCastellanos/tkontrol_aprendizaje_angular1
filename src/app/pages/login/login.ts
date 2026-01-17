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
    // ngOnInit debe estar vacío o con lógica de carga, no con funciones dentro
    //se debe dejar sin funciones
  }

  // La función debe estar fuera de ngOnInit para que se inicialice antes 
  Ingresar() {

    
    if (this.nombre.trim().length === 0) { return; }
      this.wsService.loginWS( this.nombre)
    console.log('Usuario ingresado:', this.nombre);
    
    // Navegamos a la ruta de mensajes que definiste en app.routes.ts
    this.router.navigateByUrl('/mensajes');
  }
}

