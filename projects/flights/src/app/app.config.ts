import { ApplicationConfig, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

declare global {
  var ngZone: NgZone;
}

export const appConfig: ApplicationConfig = {
  providers: [
    globalThis.ngZone
      ? {
          provide: NgZone,
          useValue: globalThis.ngZone,
        }
      : [],
    provideRouter(routes),
    provideClientHydration(),
  ],
};
