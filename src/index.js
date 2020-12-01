import smoothscroll from 'smoothscroll-polyfill'
import React from 'react'
import rootReducer from './reducers/root_reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context'

import { loadState, saveState } from './localStorage'

smoothscroll.polyfill()

const persistedState = loadState()

const configureStore = () =>
    createStore(rootReducer, persistedState, applyMiddleware(thunk))

const store = configureStore()

store.subscribe(() => {
    saveState(store.getState())
})

const httpLink = createHttpLink({
    // uri: 'http://localhost:9000/graphql'
    uri: 'https://api.thankyougift.io/graphql'
})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const createApolloClient = (cache = {}) =>
    new ApolloClient({
        ssrMode: typeof window !== 'undefined',
        cache: new InMemoryCache().restore(cache),
        link: authLink.concat(httpLink)
    })

const client = createApolloClient()

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Root />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
