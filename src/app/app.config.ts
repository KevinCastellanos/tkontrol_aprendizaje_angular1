import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';

const config: SocketIoConfig = { 
  url: environment.wsUrl, options: { } 

};



export const appConfig: ApplicationConfig = {
  providers: [
    
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    importProvidersFrom(SocketIoModule.forRoot(config))
  ]
};


// //correcciones 
// import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';

// // Quita el import de provideRouter y routes para evitar duplicidad

// // Sockets
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { environment } from '../environments/environment';

// const config: SocketIoConfig = { 
//   url: environment.wsUrl, options: { } 
// };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideRouter(routing),
//     // Se eliminó provideRouter(routes) porque ya lo provees en App.ts vía AppRoutingModule
//     importProvidersFrom(SocketIoModule.forRoot(config))
//   ]
// };