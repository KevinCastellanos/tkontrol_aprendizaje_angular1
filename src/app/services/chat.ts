import { Injectable } from '@angular/core';
import { Websocket } from './websocket';

@Injectable({
  providedIn: 'root',
})

export class Chat {

  constructor(
    public wsService: Websocket
  ){ }

    sendMessage ( mensaje: string ){

      const payload = {
        de: 'Rosales',
        cuerpo: mensaje
      };

      this.wsService.emit (' mensaje ', payload);

    }

    getMessages(){
      return this.wsService.listen('mensaje-nuevo');
    }

  
}
