const initData = {
  groups: [],
  recents: [],
  friends: [],
  recentCalls: []
}


const reducer = (store = initData, action) => {
  switch (action.type) {
    case 'setGroups':
      return {
        ...store,
        groups: action.data
      };

      case 'setRecents':
      return {
        ...store,
        recents: action.data
      } 

      case 'setFriends':
        return {
          ...store,
          friends: action.data
        }

        case 'setRecentCalls':
      return {
        ...store,
        recentCalls: action.data
      }
  
    default:
      return store;
  }
}

export default reducer;