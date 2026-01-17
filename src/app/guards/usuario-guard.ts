import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Websocket } from '../services/websocket';

@Injectable({
  providedIn: 'root',
})

//el CanActivate es el que le dice a la ruta que tiene que cumplir una condicion para poder seguir procesando la informacipón

export class UsuarioGuard  implements CanActivate{

  

  constructor(
    public wsService: Websocket,
    private router: Router
  ){}

  
  canActivate(){
    if (this.wsService.getUsuario()){
      return true;
      
    }else {
      this.router.navigateByUrl('/');
      return false;
    }

  }
  
}
