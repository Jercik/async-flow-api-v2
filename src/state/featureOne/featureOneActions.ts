import { createAction } from "typesafe-actions";
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

/* ******************* *
 *   ACTION CREATORS   *
 * ******************* */

export const featureOneFetchDataAction: (
  payload?: Partial<FetchRequestPayloadType>,
  meta?: Partial<FetchRequestMetaType>
) => FeatureOneFetchDataType = createAction(FeatureOneActionTypes.FETCH_DATA)<
  Partial<FetchRequestPayloadType> | undefined,
  Partial<FetchRequestMetaType> | undefined
>();
