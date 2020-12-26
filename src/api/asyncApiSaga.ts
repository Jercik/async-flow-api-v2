import { FetchRequestActionConfig } from "../model/api/fetchApiTypes";
import { take, fork } from "@redux-saga/core/effects";
import { fetchRequestConfig } from "./config/fetchRequestConfig";
import { Action } from "typesafe-actions";

function* makeAsyncRequest(
  action: Action,
  actionRequestConfig: FetchRequestActionConfig
): Generator {
  yield;
  console.log("ASYNC_SAGA", action, actionRequestConfig);
}

export function* watchAsyncActions() {
  while (true) {
    const action: Action = yield take("*");
    const actionRequestConfig: FetchRequestActionConfig | undefined =
      fetchRequestConfig[action.type];
    const isAsyncRequestAction: boolean = !!actionRequestConfig;

    if (isAsyncRequestAction) {
      yield fork(makeAsyncRequest, action, actionRequestConfig);
    } else {
      console.log(
        `Action ${action.type} has no request config entry, thus is considered a non-request action.`
      );
    }
  }
}
