const initialState = {
  team: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_TEAM_REQUEST':
    case 'POST_TEAM_REQUEST':
    case 'PUT_TEAM_REQUEST':
    case 'DELETE_TEAM_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }

    case 'GET_TEAM_ERROR':
    case 'POST_TEAM_ERROR':
    case 'PUT_TEAM_ERROR':
    case 'DELETE_TEAM_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    case 'GET_TEAM_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }

    case 'POST_TEAM_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }

    case 'PUT_TEAM_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }

    case 'DELETE_TEAM_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      }

    default:
      return state
  }
}