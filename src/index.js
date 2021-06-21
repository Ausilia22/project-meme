import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import storeConfiguration from "./store/configureStore";

ReactDOM.render(
  <Provider store={storeConfiguration}>
    <App />
  </Provider>,
  document.getElementById("root")
);
