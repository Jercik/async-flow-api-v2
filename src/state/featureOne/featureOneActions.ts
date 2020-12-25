import { createAction, createAsyncAction } from "typesafe-actions";
import { FeatureOneActionTypes } from "./featureOneActionTypes";
import {
  FetchRequestMetaType,
  FetchRequestPayloadType,
} from "../../model/api/fetchApiTypes";

interface FeatureOneFetchDataType {
  type: FeatureOneActionTypes.FETCH_DATA;
  paylaod?: Partial<FetchRequestPayloadType>;
  meta?: Partial<FetchRequestMetaType>;
}

interface FeatureOneSuccessPayloadType {
  field1: string;
  field2: string;
  field3: string;
}

/* ******************* *
 *   ACTION CREATORS   *
 * ******************* */

// this action initiates the async flow
export const featureOneFetchDataAction: (
  payload?: Partial<FetchRequestPayloadType>,
  meta?: Partial<FetchRequestMetaType>
) => FeatureOneFetchDataType = createAction(FeatureOneActionTypes.FETCH_DATA)<
  Partial<FetchRequestPayloadType> | undefined,
  Partial<FetchRequestMetaType> | undefined
>();

// this action action is the actual async REQUEST, SUCCESS, FAILURE flow
export const featureOneAsyncAction = createAsyncAction(
  FeatureOneActionTypes.FETCH_DATA_REQUEST,
  FeatureOneActionTypes.FETCH_DATA_SUCCESS,
  FeatureOneActionTypes.FETCH_DATA_FAILURE
)<
  [FetchRequestPayloadType, FetchRequestMetaType],
  FeatureOneSuccessPayloadType,
  Error
>();
