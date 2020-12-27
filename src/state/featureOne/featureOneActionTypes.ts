/* ***************** *
 *   ACTION TYPES    *
 * ***************** */

// NOTE: a fourth action type (without any suffix) can be used to initialise the async flow
// e.g. FETCH_DATA = "@FEATURE_ONE_FETCH_DATA" <-- in this case the _REQUEST suffix will be
// added automatically
export enum FeatureOneActionTypes {
  FETCH_DATA_REQUEST = "@FEATURE_ONE/FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS = "@FEATURE_ONE/FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE = "@FEATURE_ONE/FETCH_DATA_FAILURE",
}
