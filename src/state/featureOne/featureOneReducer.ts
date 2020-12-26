import { ActionType, getType, Reducer } from "typesafe-actions";
import { FeatureOneState } from "../../model/state/storeTypes";
import * as featureOneActions from "./featureOneActions";

export const initialFeatureOneState: FeatureOneState = {
  isFetching: false,
  data: null,
};

export const featureOneReducer: Reducer<
  FeatureOneState,
  ActionType<typeof featureOneActions>
> = (state: FeatureOneState = initialFeatureOneState, action) => {
  switch (action.type) {
    case getType(featureOneActions.featureOneFetchDataAction.success):
      return state;
    default:
      return state;
  }
};
