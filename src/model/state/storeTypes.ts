export interface GlobalAppState {
  app: AppState;
  featureOne: FeatureOneState;
}

export interface AppState {
  appInitialised: boolean;
}

export interface FeatureOneState {
  isFetching: boolean;
  isError: boolean;
  data: any;
}
