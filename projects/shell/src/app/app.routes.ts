import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { type RemoteWrapperConfig } from './remote-wrapper.type';

const flightsAppConfig: RemoteWrapperConfig = {
  exposedModule: './flights-app',
  remoteName: 'flights-app',
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./flights-app-wrapper.component').then(
        (m) => m.FlightsAppWrapperComponent
      ),
    pathMatch: 'full',
    data: {
      config: flightsAppConfig,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
