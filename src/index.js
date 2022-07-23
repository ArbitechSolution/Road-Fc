import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "../src/Component/Redux/index";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

