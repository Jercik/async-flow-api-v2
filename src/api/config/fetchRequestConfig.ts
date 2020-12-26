import { allActions } from "../../state";
import { getType } from "typesafe-actions";
import { FetchRequestConfig } from "../../model/api/fetchApiTypes";

export const fetchRequestConfig: FetchRequestConfig = {
  [getType(allActions.featureOneActions.featureOneFetchDataAction.request)]: {
    payload: {
      endpoint: "/endpoint1",
      endpointV2: "/endpoint1_v2",
      method: "GET",
    },
    meta: {
      shouldDispatchEmptyBodyAction: true,
    },
  },
};
