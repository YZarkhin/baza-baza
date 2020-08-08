const initialState = {
    projects: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PROJECTS_REQUEST' :
        case 'POST_PROJECT_REQUEST' :
        case 'PUT_PROJECT_REQUEST' :
        case 'DELETE_PROJECT_REQUEST' :
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'GET_PROJECTS_ERROR' :
        case 'POST_PROJECT_ERROR' :
        case 'PUT_PROJECT_ERROR' :
        case 'DELETE_PROJECT_ERROR' :
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case 'GET_PROJECTS_SUCCESS' :
            return {
                ...state,
                loading: false,
                projects: action.payload.data
            }
        case 'POST_PROJECT_SUCCESS' :
            return {
                ...state,
                loading: false,
                projects: action.payload.data
            }
        case 'PUT_PROJECT_SUCCESS' :
            return {
                ...state,
                loading: false,
                projects: action.payload.data
            }
        case 'DELETE_PROJECT_SUCCESS' :
            return {
                ...state,
                loading: false,
                projects: action.payload.data
            }
        default:
            return state
    }
}