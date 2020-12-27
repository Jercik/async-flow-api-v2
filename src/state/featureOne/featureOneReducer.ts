import { ActionType, getType, Reducer } from "typesafe-actions";
import { FeatureOneState } from "../../model/state/storeTypes";
import * as featureOneActions from "./featureOneActions";

export const initialFeatureOneState: FeatureOneState = {
  isFetching: false,
  isError: false,
  data: null,
};

export const featureOneReducer: Reducer<
  FeatureOneState,
  ActionType<typeof featureOneActions>
> = (state: FeatureOneState = initialFeatureOneState, action) => {
  switch (action.type) {
    case getType(featureOneActions.featureOneFetchDataAction.request):
      return { ...state, isFetching: true, isError: false, data: null };
    case getType(featureOneActions.featureOneFetchDataAction.success):
      return { ...state, isFetching: false, data: action.payload };
    case getType(featureOneActions.featureOneFetchDataAction.failure):
      return { ...state, isFetching: false, data: null, isError: true };
    default:
      return state;
  }
};
