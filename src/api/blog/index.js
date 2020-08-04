import axios from '../base';
import store from '../../redux';
import * as action from '../../redux/action/blog';

export const getBlogPosts = () => {
  store.dispatch(action.getPosts());
  console.log(store.getState());
  axios.get('/blog')
    .then(res => {
      store.dispatch(action.getPostsSuccess(res))
      console.log(store.getState());
    })
    .catch(err => {
      store.dispatch(action.getPostsError(err))
      console.log(store.getState());
    })
}

export const postBlogPost = ({title, body, author}) => {
  return axios.post('/blog', {title, body, author})
}

export const updateBlogPost = (id, {title, body, author}) => {
  return axios.put(`/blog/${id}`, {title, body, author})
}

export const deleteBlogPost = (id) => {
  return axios.delete(`/blog/${id}`)
}