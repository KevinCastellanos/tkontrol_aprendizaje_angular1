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




//Codigo modificado para quie realize el conectado o desconectado del servidor ya no se hace direcrtamente el 
// websocket ahora tambien se implementa en app.ts

import  { Footer } from './components/footer/footer'
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Websocket } from './services/websocket';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(
    private wsService: Websocket
  ) {
    console.log('AppComponent cargado');
    }

  ngOnInit(): void {}

  protected readonly title = signal('Basico');

}
