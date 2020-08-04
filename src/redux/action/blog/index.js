export const getPosts = () => ({
  type: 'GET_POSTS_REQUEST'
})

export const getPostsSuccess = (response) => ({
  type: 'GET_POSTS_SUCCESS',
  payload: {
    ...response,
  }
})

export const getPostsError = (error) => ({
  type: 'GET_POSTS_ERROR',
  payload: {
    ...error,
  }
})

export const postPost = () => ({
  type: 'POST_POSTS_REQUEST'
})

export const postPostSuccess = (response) => ({
  type: 'POST_POSTS_SUCCESS',
  payload: {
    ...response,
  }
})

export const postPostError = (error) => ({
  type: 'POST_POSTS_ERROR',
  payload: {
    ...error,
  }
})

export const putPost = () => ({
  type: 'PUT_POSTS_REQUEST'
})

export const putPostSuccess = (response) => ({
  type: 'PUT_POSTS_SUCCESS',
  payload: {
    ...response,
  }
})

export const putPostError = (error) => ({
  type: 'PUT_POSTS_ERROR',
  payload: {
    ...error,
  }
})

export const deletePost = () => ({
  type: 'DELETE_POSTS_REQUEST'
})

export const deletePostSuccess = (response) => ({
  type: 'DELETE_POSTS_SUCCESS',
  payload: {
    ...response,
  }
})

export const deletePostError = (error) => ({
  type: 'DELETE_POSTS_ERROR',
  payload: {
    ...error,
  }
})