// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Mensajes } from './pages/mensajes/mensajes';
import { UsuarioGuard } from './guards/usuario-guard';


export const routes: Routes = [
  { path: '', component: Login },
  { 
    path: 'mensajes', 
    component: Mensajes,
    canActivate: [ UsuarioGuard ]
  },
  { path: '**', component: Login },
];