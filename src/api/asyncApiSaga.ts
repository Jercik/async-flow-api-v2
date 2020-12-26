import { FetchRequestActionConfig } from "../model/api/fetchApiTypes";
import { take, fork } from "@redux-saga/core/effects";
import { fetchRequestConfig } from "./config/fetchRequestConfig";
import { call, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { fetchApi } from "./fetchApi";
import { AsyncSuffix } from "../model/api/apiTypes";

function* makeAsyncRequest(
  action: AnyAction,
  actionRequestConfig: FetchRequestActionConfig
): Generator {
  // fetch the data
  console.info("ASYNC_SAGA_ACTION_RECEIVED", action);

  yield delay(2000); // just to demostrate fetching

  // fetchApi will be called with the payload from the fetchRequestConfig + any overrides from the action
  const result: any = yield call(
    fetchApi,
    { ...actionRequestConfig.payload, ...action.payload },
    { ...actionRequestConfig.meta, ...action.meta }
  );

  const [error, data]: [Error, any] = result;

  if (data) {
    const successActionType: string = action.type.replace(
      AsyncSuffix.REQUEST,
      AsyncSuffix.SUCCESS
    );
    yield put({
      type: successActionType,
      payload: data,
    });
  }

  if (error) {
    const errorActionType: string = action.type.replace(
      AsyncSuffix.REQUEST,
      AsyncSuffix.FAILURE
    );
    yield put({
      type: errorActionType,
      payload: error,
    });
  }

  console.info("FETCH_RESULT", result);
}

export function* watchAsyncActions() {
  while (true) {
    const action: AnyAction = yield take("*");
    const actionRequestConfig: FetchRequestActionConfig | undefined =
      fetchRequestConfig[action.type];
    const isAsyncRequestAction: boolean = !!actionRequestConfig;

    if (isAsyncRequestAction) {
      yield fork(makeAsyncRequest, action, actionRequestConfig);
    } else {
      console.warn(
        `Action ${action.type} has no request config entry, thus is considered a non-request action.`
      );
    }
  }
}
