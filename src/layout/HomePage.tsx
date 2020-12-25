import { getAppInitialised, initialiseAppAction } from "../state/app";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { featureOneFetchDataAction } from "../state/featureOne";

/* ************ *
 *   HOMEPAGE   *
 * ************ */

/* *** TYPES *** */
interface HomePageProps {}

/** *** COMPONENT *** */
export const HomePage = (props: HomePageProps) => {
  const dispatch: Dispatch = useDispatch();
  const isAppInitialised: boolean = useSelector(getAppInitialised);

  useEffect(() => {
    dispatch(initialiseAppAction());

    // fetch featureOne
    dispatch(
      featureOneFetchDataAction(
        { endpoint: "test" }, // payload
        { shouldDispatchEmptyBodyAction: true } // meta
      )
    );
  }, [dispatch]);

  return (
    <div className="App">
      <h1>BlockFi Async Flow API V2</h1>
      <h2>Feel free to browse the code :)</h2>
      {isAppInitialised && <p>App has been initialised</p>}
    </div>
  );
};
