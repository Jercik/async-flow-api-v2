import { createAsyncAction } from "typesafe-actions";
import { FeatureOneActionTypes } from "./featureOneActionTypes";
import {
  FetchRequestMetaType,
  FetchRequestPayloadType,
} from "../../model/api/fetchApiTypes";
import { createFetchRequestAction } from "../../api/asyncActionWrapper";

interface FeatureOneSuccessPayloadType {
  field1: string;
  field2: string;
  field3: string;
}

/* ******************* *
 *   ACTION CREATORS   *
 * ******************* */

// this is a simplified action creator, using the async action wrapper
// you only need to send the action name and define the SUCCESS payload type
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
