import { createAsyncAction } from "typesafe-actions";
import { AsyncSuffix } from "../model/api/apiTypes";
import {
  FetchRequestPayloadType,
  FetchRequestMetaType,
} from "../model/api/fetchApiTypes";

// this wrapper simplifies writing the action creators by enforcing the REQUEST and FAILURE payload types
// and automatic creation of three async actions: _REQUEST, _SUCCESS and _FAILURE
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
