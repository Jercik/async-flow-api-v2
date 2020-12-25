import { AppState } from "../../model/state/storeTypes";
import * as appActions from "./appActions";
import { ActionType, getType, Reducer } from "typesafe-actions";

export const initialAppState: AppState = {
  appInitialised: false,
};

/* *********** *
 *   REDUCER   *
 * *********** */

export const appReducer: Reducer<AppState, ActionType<typeof appActions>> = (
  state: AppState = initialAppState,
  action
) => {
  switch (action.type) {
    case getType(appActions.setInitialiseAppAction):
      return {
        ...state,
        appInitialised: action.payload,
      };
    default:
      return state;
  }
};
