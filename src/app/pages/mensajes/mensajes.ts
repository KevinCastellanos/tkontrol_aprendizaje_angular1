// mensajes.ts
import { Component, OnInit } from '@angular/core';
import { Chats } from '../../components/chats/chats'; // Asegura que la ruta sea correcta
import { Websocket } from '../../services/websocket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [Chats,CommonModule], // <--- ESTO ARREGLA EL ERROR NG8001
  templateUrl: './mensajes.html',
  styleUrl: './mensajes.css'
})

export class Mensajes implements OnInit{

constructor (
  public wsService: Websocket

  ) {}

ngOnInit(): void {}

}



