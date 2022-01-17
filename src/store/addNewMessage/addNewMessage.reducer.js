import {ADD_NEW_MESSAGE_ACTION_TYPES} from 'store/addNewMessage/addNewMessage.action-types';

const addNewMessageInitData = {
  data: null,
}

const addNewMessageReducer = (store = addNewMessageInitData, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE_ACTION_TYPES.ADD_NEW_MESSAGE:
      let recents = store.recents.data;
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

export default addNewMessageReducer;