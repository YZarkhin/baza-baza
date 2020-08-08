import { createStore, combineReducers } from 'redux'
import blogReducer from './reducer/blog'
import teamReducer from './reducer/team'

const combinedReducers = combineReducers({
  blog: blogReducer,
  team: teamReducer,
})

export default createStore(combinedReducers)