import axios from '../base';

export const getProjects = () => {
    return axios.get('/projects')
}

export const postProject = ({name, client, bio, picture, country}) => {
    return axios.post('/projects', {name, client, bio, picture, country})
}

export const updateProject = (id, {name, client, bio, picture, country}) => {
    return axios.put(`/projects/${id}`, {name, client, bio, picture, country})
}

export const deleteProject = (id) => {
    return axios.delete(`/projects/${id}`)
}
