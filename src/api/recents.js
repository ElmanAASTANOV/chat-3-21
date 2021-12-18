import API from './index';
export const getRecents = () => API.get("recents").then(res => res.data);