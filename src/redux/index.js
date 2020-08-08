import { createStore, combineReducers } from 'redux'
import blogReducer from './reducer/blog'
import projectsReducer from './reducer/projects'

const combinedReducers = combineReducers({
  blog: blogReducer,
  projects: projectsReducer
})

export default createStore(combinedReducers)