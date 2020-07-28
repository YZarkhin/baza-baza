import axios from '../base';

export const getBlogPosts = () => {
  return axios.get('/blog')
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