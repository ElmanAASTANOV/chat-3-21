import API from './index';
export const getGroups = () => API.get("groups").then(res => res.data);