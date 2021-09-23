import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './wesiteReplica/App';
// import App from './w3shools/App';
// import App from './jsonPlaceholderList/App';
// import App from './blogpost/App';

import App from "./E-commerce/App";

// import App from "./edisphere/App";

// import { store } from "./todoListRedux/store";
// import App from "./todoListRedux/App";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./E-commerce/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
