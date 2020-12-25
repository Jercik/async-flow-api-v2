import * as React from "react";
import "../styles/styles.css";
import { createReduxStore } from "../store/createReduxStore";
import { Provider } from "react-redux";
import { HomePage } from "../layout/HomePage";

export default function App() {
  const store = createReduxStore();
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
