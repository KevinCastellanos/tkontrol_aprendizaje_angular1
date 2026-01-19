// import { Component, OnInit,signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Socket } from 'ngx-socket-io';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })

// export class App implements OnInit{

//   constructor(
//     private socket: Socket
    
//   ){}

//     ngOnInit(): void {
      
//     }

//   protected readonly title = signal('Basico');
// }
 



//Codigo modificado para que realize el conectado o desconectado del servidor ya no se hace directamente el 
// websocket !ahora tambien se implementa en app.ts

import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Websocket } from './services/websocket';
import { FormsModule } from '@angular/forms';
import { Chat } from './services/chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, // Esto permite que funcionen las rutas
    Footer,
    FormsModule,
    
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App implements OnInit{

  constructor(
    public wsService: Websocket,
    public chatService: Chat
    
  ) {
    console.log('AppComponent cargado');
  }

  ngOnInit(): void {
    this.chatService.getMessagesPrivate().subscribe( msg =>{
      console.log(msg);
    })
    
  }

}