import { ACTION_TYPES } from "store/actionTypes";

const initData = {
  groups: [],
  recents: [],
  friends: [],
  recentCalls: []
}


const reducer = (store = initData, action) => {
  switch (action.type) {
    case ACTION_TYPES.SETGROUPS:
      return {
        ...store,
        groups: action.data
      };

    case ACTION_TYPES.SETRECENTS:
      return {
        ...store,
        recents: action.data
      }

    case ACTION_TYPES.SETFRIENDS:
      return {
        ...store,
        friends: action.data
      }

    case ACTION_TYPES.SETRECENTCALLS:
      return {
        ...store,
        recentCalls: action.data
      }

    case ACTION_TYPES.SETSEARCHRESULT:
      return {
        ...store,
        searchResult: action.data
      }

    default:
      return store;
  }
}

export default reducer;