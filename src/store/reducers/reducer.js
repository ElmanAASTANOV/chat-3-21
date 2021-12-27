import { ACTIONS } from "store/actions/actions";

const initData = {
  groups: [],
  recents: [],
  friends: [],
  recentCalls: []
}


const reducer = (store = initData, action) => {
  switch (action.type) {
    case ACTIONS.SETGROUPS:
      return {
        ...store,
        groups: action.data
      };

      case ACTIONS.SETRECENTS:
      return {
        ...store,
        recents: action.data
      } 

      case ACTIONS.SETFRIENDS:
        return {
          ...store,
          friends: action.data
        }

        case ACTIONS.SETRECENTCALLS:
      return {
        ...store,
        recentCalls: action.data
      }
  
    default:
      return store;
  }
}

export default reducer;