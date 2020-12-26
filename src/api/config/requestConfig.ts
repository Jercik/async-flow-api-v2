import { allActions } from "../../state";
import { getType } from "typesafe-actions";
import { RequestConfig } from "../../model/api/fetchApiTypes";

export const requestConfig: RequestConfig = {
  [getType(allActions.featureOneActions.featureOneFetchDataAction2.request)]: {
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
