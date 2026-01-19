// mensajes.ts
import { Component, OnInit } from '@angular/core';
import { Chats } from '../../components/chats/chats'; // Asegura que la ruta sea correcta
import { Websocket } from '../../services/websocket';
import { CommonModule } from '@angular/common';
import { ListaUsuario } from "../../components/lista-usuario/lista-usuario";



@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [Chats, CommonModule, ListaUsuario] , 
  templateUrl: './mensajes.html',
  styleUrl: './mensajes.css'
})

export class Mensajes implements OnInit{

  constructor (
    public wsService: Websocket

    ) {}

  ngOnInit(): void {}

 

  salir() {
    this.wsService.logoutWS();
  } 


}

