import {getBlogPosts, postBlogPost, updateBlogPost, deleteBlogPost} from './blog'
import {getProjects, postProject, updateProject, deleteProject} from './projects'
import {getTeams, postTeam, updateTeam, deleteTeam} from './team'

export default {
  blog: {
    getBlogPosts,
    postBlogPost,
    updateBlogPost,
    deleteBlogPost
  },
  teams: {
    getTeams,
    postTeam,
    updateTeam,
    deleteTeam,
  },
  projects: {
    getProjects,
    postProject,
    updateProject,
    deleteProject
  }
}