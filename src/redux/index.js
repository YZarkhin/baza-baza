import { createStore, combineReducers } from 'redux'
import blogReducer from './reducer/blog'

const combinedReducers = combineReducers({
  blog: blogReducer
})

export default createStore(combinedReducers)