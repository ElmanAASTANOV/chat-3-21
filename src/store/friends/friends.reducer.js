import { FRIENDS_ACTION_TYPES } from "./friends.action-types";

const friendsInitData = {
  data: [],
  loading: false,
  error: ''
}

const friendsReducer = (store = friendsInitData, action) => {
  switch (action.type) {

    case FRIENDS_ACTION_TYPES.SET_FRIENDS:
      return {
        ...store,
        ...friendsInitData,
        data: action.data
      }

    case FRIENDS_ACTION_TYPES.SET_FRIENDS_LOADING:
      return {
        ...store,
        ...friendsInitData,
        loading: true
      }
    case FRIENDS_ACTION_TYPES.SET_FRIENDS_ERROR:
      return {
        ...store,
        ...friendsInitData,
        error: action.data
      }

    default:
      return store;
  }
}

export default friendsReducer;