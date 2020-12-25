import { createAsyncAction } from "typesafe-actions";
import { AsyncSuffix } from "../model/api/apiTypes";

export const createAsyncActionWrapper = <TypeConst extends string>(
  type: TypeConst
) => <R, S, F>() =>
  createAsyncAction(
    `${type}${AsyncSuffix.REQUEST}` as const,
    `${type}${AsyncSuffix.SUCCESS}` as const,
    `${type}${AsyncSuffix.FAILURE}` as const
  )<R, S, F>();
