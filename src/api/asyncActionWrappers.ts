import { createAsyncAction } from "typesafe-actions";
import { AsyncSuffix } from "../model/api/apiTypes";
import {
  FetchRequestPayloadType,
  FetchRequestMetaType,
} from "../model/api/fetchApiTypes";
import { getActionName } from "../utils";

// this wrapper simplifies writing the action creators by enforcing the REQUEST and FAILURE payload types
// and automatic creation of three async actions: _REQUEST, _SUCCESS and _FAILURE
export const createFetchRequestAction = <ActionType extends string>(
  type: ActionType
) => <SuccessPayloadAction>() =>
  createAsyncAction(
    `${getActionName(type, AsyncSuffix.REQUEST)}` as const,
    `${getActionName(type, AsyncSuffix.SUCCESS)}` as const,
    `${getActionName(type, AsyncSuffix.FAILURE)}` as const
  )<
    [Partial<FetchRequestPayloadType> | {}, Partial<FetchRequestMetaType | {}>],
    SuccessPayloadAction,
    Error
  >();
