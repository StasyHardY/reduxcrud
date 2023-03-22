import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store/store";
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
