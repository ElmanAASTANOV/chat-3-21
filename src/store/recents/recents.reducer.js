import { RECENTS_ACTION_TYPES } from './recents.action-types'

const recentsInitData = {
  data: [],
}


const recentsReducer = (store = recentsInitData, action) => {
  switch (action.type) {

    case RECENTS_ACTION_TYPES.SETRECENTS:
      return {
        ...store,
        data: action.data
      }

    default:
      return store;
  }
}

export default recentsReducer;