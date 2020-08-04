import {getBlogPosts, postBlogPost, updateBlogPost, deleteBlogPost} from './blog'

export default {
  blog: {
    getBlogPosts,
    postBlogPost,
    updateBlogPost,
    deleteBlogPost
  },
  projects: {
    getProjects,
    postProject,
    updateProject,
    deleteProject
  }
}