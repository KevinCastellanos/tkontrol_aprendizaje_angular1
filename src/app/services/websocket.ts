import { Injectable, signal } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

//DE AQUI HACIA ABAJO SON LOS METODOS UTILIZADOS
export class Websocket {


  //ESCUCHA LOS EVENTOS Y TRANSFORMA LOS EVENTOS DEL SERVIDOR PARA QUE EL SERVIDOR DE NODE PUEDA ESCUCHARLO
  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }


  //ESTE ESTADO PERMITE QUE LA APP  PUEDA VER SI HAY CONEXION EN TIEMPO REAL Y PUEDE BRINDAR ESA INFORMACIÓN
  public socketStatus = signal<boolean>(false);
  public usuario = signal<Usuario | null>(null); // 👈 CLAVE
  

  constructor(
    private socket: Socket,
    private router: Router
  ) {
    this.checkStatus();
    this.cargarStorage();
  }

  //ESTE CHECKSTATUS MONITOREA EL HISTORIAL DE CONEXION SI ESTA CONECTADO O NO HAY CONEXION
  checkStatus() {
    this.socket.on('connect', () => {
      this.socketStatus.set(true);

      const user = this.usuario();
      if (user) {
        this.loginWS(user.nombre);
        
      }
    });

    this.socket.on('disconnect', () => {
      this.socketStatus.set(false);
    });
  }


  //EMITE SALIDAS DE DATOS HACIA EL SERVIDOR NODE Y YA EN NODE SE PROCESA Y MUESTRA UNAS SALIDAS
  emit(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }



loginWS(nombre: string) {
  // Retornamos una Promesa para que el componente sepa CUÁNDO terminó el servidor
  return new Promise<void>((callback) => {
    this.emit('configurar-usuario', { nombre }, (resp: any) => {
      const user = new Usuario(nombre);
      this.usuario.set(user);
      this.guardarStorage(user);
      
      callback(); // Avisamos que el servidor ya ejecutó el callback de socket.ts
    });
  });
}


//cierra sessión para que no este una conexión activa el bton esta en mensajes.html y en mensajes.ts se configura la acción para salir.
  logoutWS(){
    this.usuario.set(null);
    localStorage.removeItem('usuario');
    
    const payload = {
      nombre: 'sin-nombre'
    };

    this.emit('configurar-usuario', payload,() => {});
    this.router.navigateByUrl('');

    
  }



  getUsuario(){
    return this.usuario();
  }

  //GUARDA LA SESSION PARA QUE AL RECARGAR LA PESTAÑA NO TENGA QUE VOLVER A LOGUEARSE 
  guardarStorage(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }


  // AYUDA A CONFIRMAR EL NOMBRE CON EL SERVIDOR  Y SI EXISTE QUE LO MANTENGA SOLO PARA UTILIZARLO
  cargarStorage() {
    const data = localStorage.getItem('usuario');

    if (data) {
      const usuario = JSON.parse(data);
      this.usuario.set(usuario);

      if(this.socket.ioSocket.connected){
      this.loginWS( usuario.nombre);
      }
    }
  }
}


