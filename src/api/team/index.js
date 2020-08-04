import axios from '../base';

export const getTeams = () => {
  return axios.get('/teams')
}

export const postTeam = ({name, bio, postion, picture}) => {
  return axios.post('/teams', {name, bio, postion, picture})
}

export const updateTeam = (id, {name, bio, postion, picture}) => {
  return axios.put(`/teams'/${id}`, {name, bio, postion, picture})
}

export const deleteTeam = (id) => {
  return axios.delete(`/teams'/${id}`)
}