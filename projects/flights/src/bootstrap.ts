import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';

createApplication(appConfig)
  .then((appRef) => {
    const flightsApp = createCustomElement(AppComponent, {
      injector: appRef.injector,
    });

    customElements.define('flights-app', flightsApp);
  })
  .catch((err) => console.error(err));
