import { createAction } from "typesafe-actions";
import { AppActionTypes } from "./appActionTypes";

export interface InitialiseAppType {
  type: AppActionTypes.INITIALISE_APP;
}

export interface SetInitialiseAppType {
  type: AppActionTypes.SET_INITIALISE_APP;
  payload: boolean;
}

/* ******************* *
 *   ACTION CREATORS   *
 * ******************* */

export const initialiseAppAction: () => InitialiseAppType = createAction(
  AppActionTypes.INITIALISE_APP
)();

export const setInitialiseAppAction: (
  isAppInitialised: boolean
) => SetInitialiseAppType = createAction(
  AppActionTypes.SET_INITIALISE_APP,
  (isAppInitialised: boolean) => isAppInitialised
)<boolean>();
