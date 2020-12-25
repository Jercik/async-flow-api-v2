import { GlobalAppState } from "../../model/state/storeTypes";

export const getAppInitialised = (state: GlobalAppState) =>
  state.app.appInitialised;
