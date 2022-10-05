import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import store from "./redux/store";
import { Provider } from "react-redux";

import { createStore } from "redux";
// import  Provider from "react-redux";
import productsReducer from "./redux/reducers/productsReducer";

const store = createStore(productsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
