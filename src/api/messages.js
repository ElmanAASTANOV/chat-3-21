import API from "./index";
export const getMessages = () => API.get("messages").then(res => res.data);
