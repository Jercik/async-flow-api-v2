// global payload for the fetch requests
export interface FetchRequestPayloadType {
  onReceive?: () => any;
  onFailure?: () => any;
  endpoint: string;
  endpointV2: string;
  method: string;
  body?: any;
  customHeaders?: Record<string, string>;
  hasAuth?: boolean;
  authToken?: string;
  cancel?: boolean;
}

export interface FetchRequestMetaType {
  shouldDispatchEmptyBodyAction?: boolean;
  takeFirst?: boolean;
  takeOnce?: boolean;
}

export interface FetchRequestConfig {
  [key: string]: FetchRequestActionConfig;
}

export interface FetchRequestActionConfig {
  payload: FetchRequestPayloadType;
  meta?: FetchRequestMetaType;
}
