const initialState = {
  posts: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_POSTS_REQUEST':
    case 'POST_POSTS_REQUEST':
    case 'PUT_POSTS_REQUEST':
    case 'DELETE_POSTS_REQUEST': 
      return {
        ...state,
        loading: true,
        error: null,
      }
  
    case 'GET_POSTS_ERROR': 
    case 'POST_POSTS_ERROR':
    case 'PUT_POSTS_ERROR':
    case 'DELETE_POSTS_ERROR': 
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    case 'GET_POSTS_SUCCESS': 
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }
   
    case 'POST_POSTS_SUCCESS': 
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }

    case 'PUT_POSTS_SUCCESS': 
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }

    case 'DELETE_POSTS_SUCCESS': 
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }

    default: 
      return state
  }
}