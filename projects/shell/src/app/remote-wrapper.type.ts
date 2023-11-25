export interface RemoteWrapperConfig {
  remoteName: string;
  exposedModule: string;
  elementName?: string;
}

export const initWrapperConfig: RemoteWrapperConfig = {
  remoteName: '',
  exposedModule: '',
};
