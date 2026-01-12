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
