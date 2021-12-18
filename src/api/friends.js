import API from './index';
export const getFriends = () => API.get("friends").then(res => res.data);