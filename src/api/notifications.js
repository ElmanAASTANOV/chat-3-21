import API from './index';
export const getNotifications = () => API.get("notifications").then(res => res.data);