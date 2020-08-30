import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { createBrowserHistory } from "history";
import App from './App'
import configureStore from "./common/configureStore";

const store = configureStore();
// const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
