import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./app";
import ReactModal from 'react-modal';

// if this is removed, you will get warning about screen readers' inability to use modal correctly
const appElement = document.getElementById("app");
ReactModal.setAppElement(appElement);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  appElement,
);
