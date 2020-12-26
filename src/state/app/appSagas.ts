import { AppActionTypes } from "./appActionTypes";
import { InitialiseAppType, setInitialiseAppAction } from "./appActions";
import { takeLatest, delay, put } from "@redux-saga/core/effects";

function* setAppInitialised(action: InitialiseAppType) {
  yield delay(1000);
  yield put(setInitialiseAppAction(true));
  console.log("APP_SAGA_ACTION_RECEIVED", action);
}

export function* watchInitialiseApp() {
  yield takeLatest(AppActionTypes.INITIALISE_APP, setAppInitialised);
}
