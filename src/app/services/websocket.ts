import { Injectable, signal } from '@angular/core';
import { Socket} from 'ngx-socket-io'

@Injectable({
  providedIn: 'root',
})


export class Websocket {

  public socketStatus = signal<boolean>(false);

  constructor(
    private socket: Socket

  ){
    this.checkStatus();
  }

    //Esa configuracion se debe de configurar también en app.ts
    checkStatus(){

      this.socket.on('connect' , ()  => {
        console.log ('Conectado al servidor');
        this.socketStatus.set(true);
      });

      this.socket.on('disconnect' , ()  => {
        console.log ('Desconectado del servidor');
                this.socketStatus.set(false);
      });
    }

    emit (evento: string, payload?: any, callback?: Function){

      console.log( 'Emitiendo ' , evento);

      //emit (EVENTO, payload, callback?)

      this.socket.emit ( evento, payload, callback);

    }

    listen( evento: string ){
      return this.socket.fromEvent( evento );
      
    }
}

