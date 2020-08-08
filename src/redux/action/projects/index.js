// GET REQUESTS
export const getProjects = () => ({
    type: 'GET_PROJECTS_REQUEST'
})

export const getProjectsSuccess = (response) => ({
    type: 'GET_PROJECTS_SUCCESS',
    payload: {
        ...response
    }
})

export const getProjectsError = (error) => ({
    type: 'GET_PROJECTS_ERROR',
    payload: {
        ...error
    }
})

// POST REQUESTS
export const postProject = () => ({
    type: 'POST_PROJECT_REQUEST'
})

export const postProjectSuccess = (response) => ({
    type: 'POST_PROJECT_SUCCESS',
    payload: {
        ...response
    }
})

export const postProjectError = (error) => ({
    type: 'POST_PROJECT_ERROR',
    payload: {
        ...error
    }
})

// PUT REQUESTS
export const putProject = () => ({
    type: 'PUT_PROJECT_REQUEST'
})

export const putProjectSuccess = (response) => ({
    type: 'PUT_PROJECT_SUCCESS',
    payload: {
        ...response
    }
})

export const putProjectError = (error) => ({
    type: 'PUT_PROJECT_ERROR',
    payload: {
        ...error
    }
})

// DELETE REQUESTS
export const deleteProject = () => ({
    type: 'DELETE_PROJECT_REQUEST'
})

export const deleteProjectSuccess = (response) => ({
    type: 'DELETE_PROJECT_SUCCESS',
    payload: {
        ...response
    }
})

export const deleteProjectError = (error) => ({
    type: 'DELETE_PROJECT_ERROR',
    payload: {
        ...error
    }
})