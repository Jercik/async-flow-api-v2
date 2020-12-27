import { AsyncSuffix } from "../model/api/apiTypes";

// action type with or without the _REQUEST suffix can be used
export const getActionName: (type: string, suffix: AsyncSuffix) => string = (
  type: string,
  suffix: AsyncSuffix
) => {
  if (type.includes(AsyncSuffix.REQUEST)) {
    return type.replace(AsyncSuffix.REQUEST, suffix);
  }

  return `${type}${suffix}`;
};
