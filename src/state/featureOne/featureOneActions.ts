import { createAsyncAction } from "typesafe-actions";
import { FeatureOneActionTypes } from "./featureOneActionTypes";
import {
  FetchRequestMetaType,
  FetchRequestPayloadType,
} from "../../model/api/fetchApiTypes";
import { createFetchRequestAction } from "../../api/asyncActionWrappers";

export interface FeatureOneSuccessPayloadType {
  field1: string;
  field2: string;
  field3: string;
}

/* ******************* *
 *   ACTION CREATORS   *
 * ******************* */

// This is a simplified action creator. When using the async action wrapper
// you only need to send the action name and define the SUCCESS payload type.
// The _REQUEST action will take the payload from the config, but it's possible
// pass the overrides for the payload and meta creators.
export const featureOneFetchDataAction = createFetchRequestAction(
  FeatureOneActionTypes.FETCH_DATA
)<FeatureOneSuccessPayloadType>();

// it's also possible to use the standard createAsyncAction and define own action types
// and payload types
export const featureOneFetchDataAction2 = createAsyncAction(
  FeatureOneActionTypes.FETCH_DATA_REQUEST,
  FeatureOneActionTypes.FETCH_DATA_SUCCESS,
  FeatureOneActionTypes.FETCH_DATA_FAILURE
)<
  [Partial<FetchRequestPayloadType>, Partial<FetchRequestMetaType>],
  FeatureOneSuccessPayloadType,
  Error
>();
