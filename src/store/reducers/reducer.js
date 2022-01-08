import { ACTION_TYPES } from "store/actionTypes";

const initData = {
  groups: [],
  recents: [],
  friends: [],
  recentCalls: [],
  selectedChatUser: null,

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
    case ACTION_TYPES.SET_CHAT_USER:
      return {
        ...store,
        selectedChatUser: action.data
      }
    case ACTION_TYPES.ADD_NEW_MESSAGE:
      let recents = store.recents;
      let data = action.data;
      for (let i = 0; i < recents.length; i++) {
        if (recents[i].user.id == data.oppositeSideId) {
          recents[i].message.push({
            content: data.content,
            date: data.date,
            type: data.type,
          })
        }
      }

      return { ...store, recents: [...recents] };


    default:
      return store;
  }
}

export default reducer;