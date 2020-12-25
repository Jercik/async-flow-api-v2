import { all } from "@redux-saga/core/effects";
import { watchInitialiseApp } from "../state/app/appSagas";
import { watchAsyncActions } from "../api/asyncApiSaga";

export function* rootSaga(): Generator {
  yield all([watchInitialiseApp(), watchAsyncActions()]);
}
