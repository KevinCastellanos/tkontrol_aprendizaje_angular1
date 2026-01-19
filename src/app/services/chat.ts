// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Websocket } from './websocket';

// @Injectable({
//   providedIn: 'root'
// })
// export class Chat {

//   constructor(private wsService: Websocket) {}

//   getMessages(): Observable<any> {
//     return new Observable(observer => {
//       this.wsService.socket.on('mensaje', (msg: any) => {
//         observer.next(msg);
//       });
//     });
//   }

//   sendMessage(mensaje: string) {
//     this.wsService.emit('mensaje', { mensaje });
//   }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Websocket } from './websocket';

@Injectable({
  providedIn: 'root'
})
export class Chat {

  constructor(private wsService: Websocket) {}

  // 1. ESCUCHAR: Cambiamos a 'mensaje-nuevo' para coincidir con el io.emit del servidor
  getMessages(): Observable<any> {
    return this.wsService.listen('mensaje-nuevo');
  }

  // 2. ENVIAR: Incluimos el nombre del usuario que tenemos guardado en el servicio Websocket
  sendMessage(texto: string) {
    const payload = {
      de: this.wsService.usuario()?.nombre || 'Anónimo', // Obtenemos el nombre del Signal
      cuerpo: texto
    };

    // El servidor escucha el evento 'mensaje' para procesarlo
    this.wsService.emit('mensaje', payload);
  }

  getMessagesPrivate(){
    return this.wsService.listen( 'mensaje-privado' );
  }

  getUsuariosActivos() { 
    return this.wsService.listen('usuarios-activos');
  }

}

