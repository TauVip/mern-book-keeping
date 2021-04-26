import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { bookListReducer } from '../reducers/books/bookListReducer'
import { createBookReducer } from '../reducers/books/createBookReducer'
import { userReducer } from '../reducers/users/userAuthReducer'

const middlewares = [thunk]

const reducer = combineReducers({
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  userLogin: userReducer
})

const userAuthFromStorage =
  localStorage.getItem('userAuthData') &&
  JSON.parse(localStorage.getItem('userAuthData'))

const initialState = {
  userLogin: { userInfo: userAuthFromStorage }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
export { store }
