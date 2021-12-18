import API from './index';
export const getRecentCalls = () => API.get("recentcalls").then(res => res.data);