import { SET_CHAT_USER_ACTION_TYPES } from "./chatUser.action-types";

const chatUserInitData = {
  data: null,
}


const chatUserReducer = (store = chatUserInitData, action) => {
  switch (action.type) {

    case SET_CHAT_USER_ACTION_TYPES.SET_CHAT_USER:
      return {
        ...store,
        data: action.data
      }

    default:
      return store;
  }
}

export default chatUserReducer;