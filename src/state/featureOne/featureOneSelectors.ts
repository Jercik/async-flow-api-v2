import { GlobalAppState } from "../../model/state/storeTypes";

export const getIsFeatureOneFetching = (state: GlobalAppState) =>
  state.featureOne.isFetching;
export const getIsFeatureOneError = (state: GlobalAppState) =>
  state.featureOne.isError;
export const getFeatureOneData = (state: GlobalAppState) =>
  state.featureOne.data;
