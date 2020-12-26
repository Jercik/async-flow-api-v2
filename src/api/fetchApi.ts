import {
  FetchRequestMetaType,
  FetchRequestPayloadType,
} from "../model/api/fetchApiTypes";

export const fetchApi: (
  payload: FetchRequestPayloadType,
  meta?: FetchRequestMetaType
) => [Error | null, any] = (
  payload: FetchRequestPayloadType,
  meta?: FetchRequestMetaType
) => {
  console.info("FETCH_API payload and meta:", payload, meta);

  const receivedDataMock: any = {
    field1: "some data",
    field2: "some other data",
    field3: "another data",
  };

  return [null, receivedDataMock];
};
