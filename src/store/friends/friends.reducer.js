import { FRIENDS_ACTION_TYPES } from "./friends.action-types";

const friendsInitData = {
  data: [],
}

const friendsReducer = (store = friendsInitData, action) => {
  switch (action.type) {

    case FRIENDS_ACTION_TYPES.SETFRIENDS:
      return {
        ...store,
        data: action.data
      }

    default:
      return store;
  }
}

export default friendsReducer;