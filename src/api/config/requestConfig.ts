import { getType } from "typesafe-actions";
import { RequestConfig } from "../../model/api/fetchApiTypes";
import * as featureOneActions from "../../state/featureOne/featureOneActions";

export const requestConfig: RequestConfig = {
  [getType(featureOneActions.featureOneFetchDataAction) as string]: {
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
