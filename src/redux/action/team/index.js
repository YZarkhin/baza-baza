export const getTeam = () => ({type: 'GET_TEAM_REQUEST'});
export const getTeamSuccess = (response) => ({type: 'GET_TEAM_SUCCESS', payload: {...response}});
export const getTeamError = (error) => ({type: 'GET_TEAM_ERROR', payload: {...error}});

export const postTeam = () => ({type: 'POST_TEAM_REQUEST'});
export const postTeamSuccess = (response) => ({type: 'POST_TEAM_SUCCESS', payload: {...response}});
export const postTeamError = (error) => ({type: 'POST_TEAM_ERROR', payload: {...error}});

export const putTeam = () => ({type: 'PUT_TEAM_REQUEST'});
export const postTeamSuccess = (response) => ({type: 'PUT_TEAM_SUCCESS', payload: {...response}});
export const postTeamError = (error) => ({type: 'PUT_TEAM_ERROR', payload: {...error}});

export const deleteTeam = () => ({type: 'DELETE_TEAM_REQUEST'});
export const deleteTeamSuccess = (response) => ({type: 'DELETE_TEAM_SUCCESS', payload: {...response}});
export const deleteTeamError = (error) => ({type: 'DELETE_TEAM_ERROR', payload: {...error}});