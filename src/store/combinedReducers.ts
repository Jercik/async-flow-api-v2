import { featureOneReducer } from "../state/featureOne";
import { combineReducers } from "redux";
import { appReducer } from "../state/app";

export const rootReducer = combineReducers({
  app: appReducer,
  featureOne: featureOneReducer,
});
