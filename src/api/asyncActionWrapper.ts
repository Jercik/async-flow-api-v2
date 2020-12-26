import { createAsyncAction } from "typesafe-actions";
import { AsyncSuffix } from "../model/api/apiTypes";
import {
  FetchRequestPayloadType,
  FetchRequestMetaType,
} from "../model/api/fetchApiTypes";

export const createFetchRequestAction = <TypeConst extends string>(
  type: TypeConst
) => <SuccessPayloadAction>() =>
  createAsyncAction(
    `${type}${AsyncSuffix.REQUEST}` as const,
    `${type}${AsyncSuffix.SUCCESS}` as const,
    `${type}${AsyncSuffix.FAILURE}` as const
  )<
    [Partial<FetchRequestPayloadType> | {}, Partial<FetchRequestMetaType | {}>],
    SuccessPayloadAction,
    Error
  >();
