import NavBar from './components/NavBar'
import React from 'react'
import rootReducer from './reducers/root_reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
// think about using apolo-client instead of apollo-boost
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const configureStore = () => (
  createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  )
)

const store = configureStore()

store.subscribe(() => {
  saveState(store.getState())
})

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window !== 'undefined',
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({
      uri: 'http://localhost:9000/graphql'
      // uri: 'https://backend.burst.gallery/graphql'
    })
  })

const client = createApolloClient()

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Provider store={store}>
      <NavBar />
      <Root />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
