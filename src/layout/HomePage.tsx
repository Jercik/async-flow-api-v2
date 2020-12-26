import { getAppInitialised, initialiseAppAction } from "../state/app";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  featureOneFetchDataAction,
  FeatureOneSuccessPayloadType,
  getFeatureOneData,
  getIsFeatureOneFetching,
} from "../state/featureOne";

/* ************ *
 *   HOMEPAGE   *
 * ************ */

/* *** TYPES *** */
interface HomePageProps {}

/** *** COMPONENT *** */
export const HomePage = (props: HomePageProps) => {
  const dispatch: Dispatch = useDispatch();
  const isAppInitialised: boolean = useSelector(getAppInitialised);
  const isFeatureOneFetching: boolean = useSelector(getIsFeatureOneFetching);
  const featureOneData: FeatureOneSuccessPayloadType = useSelector(
    getFeatureOneData
  );

  useEffect(() => {
    dispatch(initialiseAppAction());
  }, [dispatch]);

  const handleFetchFeatureOne = () => {
    // fetch featureOne data
    dispatch(
      featureOneFetchDataAction.request(
        { endpoint: "test" }, // payload overrides
        { shouldDispatchEmptyBodyAction: true } // meta overrides
      )
    );
  };

  return (
    <div className="App">
      <h1>BlockFi Async Flow API V2</h1>
      <h2>Feel free to browse the code :)</h2>
      {isAppInitialised && <p>App has been initialised</p>}
      {!isFeatureOneFetching ? (
        <button onClick={handleFetchFeatureOne}>Fetch Feature One Data</button>
      ) : (
        <strong>Fetching data...</strong>
      )}
      {featureOneData && <p>{JSON.stringify(featureOneData)}</p>}
    </div>
  );
};
