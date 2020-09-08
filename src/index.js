import smoothscroll from "smoothscroll-polyfill";
import NavBar from "./components/NavBar";
import React from "react";
import rootReducer from "./reducers/root_reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// think about using apolo-client instead of apollo-boost
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { loadState, saveState } from "./localStorage";

smoothscroll.polyfill();

const persistedState = loadState();

const configureStore = () =>
  createStore(rootReducer, persistedState, applyMiddleware(thunk));

const store = configureStore();

store.subscribe(() => {
  saveState(store.getState());
});

// const createApolloClient = (cache = {}) =>
//   new ApolloClient({
//     ssrMode: typeof window !== "undefined",
//     cache: new InMemoryCache().restore(cache),
//     link: createUploadLink({
//       uri: "http://localhost:9000/graphql",
//       // uri: "http://54.80.191.226:9000/graphql",
//     }),
//   });

const client = new ApolloClient({
  uri: "https://3.222.145.116/graphql",
  // uri: "https://54.80.191.226/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
