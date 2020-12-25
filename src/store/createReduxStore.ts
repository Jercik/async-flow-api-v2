import { GlobalAppState } from "../model/state/storeTypes";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { initialAppState } from "../state/app";
import { rootReducer } from "./combinedReducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { initialFeatureOneState } from "../state/featureOne";

export const initialGlobalAppState: GlobalAppState = {
  app: initialAppState,
  featureOne: initialFeatureOneState,
};

const sagaMiddleware = createSagaMiddleware();

export const createReduxStore = (
  initialState: GlobalAppState = initialGlobalAppState
) => {
  const reducer: any = rootReducer;
  const store: any = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
