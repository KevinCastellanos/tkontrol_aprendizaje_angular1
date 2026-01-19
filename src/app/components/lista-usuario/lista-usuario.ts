import { Component, OnInit } from '@angular/core';
import {Chat} from '../../services/chat'
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; //

@Component({
  selector: 'app-lista-usuario',
  
  imports: [CommonModule],
  templateUrl: './lista-usuario.html',
  standalone: true,
  styleUrl: './lista-usuario.css',
})

export class ListaUsuario implements OnInit {

  usuariosActivosObs!: Observable<any>;

  constructor(
    public chatService: Chat
  ) 
  {}

  ngOnInit (){
    this.usuariosActivosObs = this.chatService.getUsuariosActivos();
  }

}


// import { Component, OnInit } from '@angular/core';
// import { Chat } from '../../services/chat';
// import { Observable } from 'rxjs';
// // ELIMINA la línea de NgForOf que apunta a node_modules
// import { CommonModule } from '@angular/common'; 

// @Component({
//   selector: 'app-lista-usuario',
//   standalone: true, // Asegúrate de incluir esta línea si no usas NgModules
//   imports: [CommonModule], // CommonModule es suficiente para *ngFor y | async
//   templateUrl: './lista-usuario.html',
//   styleUrl: './lista-usuario.css',
// })
// export class ListaUsuario implements OnInit { // Agrega 'implements OnInit'

//   usuariosActivosObs!: Observable<any>;

//   constructor( public chatService: Chat ) {}

//   ngOnInit() {
//     this.usuariosActivosObs = this.chatService.getUsuariosActivos();
//   }
// }