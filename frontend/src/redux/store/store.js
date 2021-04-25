import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBookReducer } from '../reducers/books/createBookReducer'

const middlewares = [thunk]

const reducer = combineReducers({ bookCreated: createBookReducer })

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
export { store }
