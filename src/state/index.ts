import { ActionType } from "typesafe-actions";
import * as appActions from "./app/appActions";
import * as featureOneActions from "./featureOne/featureOneActions";

export const allActions = {
  appActions,
  featureOneActions,
};

type AllActions = typeof allActions;

export type RootAction = ActionType<AllActions>;
