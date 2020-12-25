import { createAsyncAction } from "typesafe-actions";
import { AsyncSuffix } from "../model/api/apiTypes";

export const createAsyncActionWrapper = <TypeConst extends string>(
  type: TypeConst
) => <R, S, F>() =>
  createAsyncAction("ACTION1", "ACTION2", "ACTION3")<R, S, F>();
