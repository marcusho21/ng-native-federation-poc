import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { RemoteWrapperConfig, initWrapperConfig } from './remote-wrapper.type';

@Component({
  selector: 'flights-app-wrapper',
  standalone: true,
  imports: [],
  template: `
    @defer (when isLoaded()) {
    <flights-app></flights-app>
    } @placeholder {
    <div>Loading...</div>
    }
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FlightsAppWrapperComponent implements OnInit {
  @Input() config: RemoteWrapperConfig = initWrapperConfig;

  isLoaded = signal(false);

  async ngOnInit() {
    const { exposedModule, remoteName } = this.config;
    const app = await loadRemoteModule(remoteName, exposedModule);
    this.isLoaded.set(!!app);
  }
}
