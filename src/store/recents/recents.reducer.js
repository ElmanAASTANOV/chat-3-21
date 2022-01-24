import { RECENTS_ACTION_TYPES } from './recents.action-types'

const recentsInitData = {
  data: [],
  loading: false,
  error: ''
}


const recentsReducer = (store = recentsInitData, action) => {
  switch (action.type) {

    case RECENTS_ACTION_TYPES.SET_RECENTS:
      return {
        ...store,
        ...recentsInitData,
        data: action.data
      }

    case RECENTS_ACTION_TYPES.SET_RECENTS_LOADING:
      return {
        ...store,
        ...recentsInitData,
        loading: true
      }

    case RECENTS_ACTION_TYPES.SET_RECENTS_ERROR:
      return {
        ...store,
        ...recentsInitData,
        error: action.data
      }

    default:
      return store;
  }
}

export default recentsReducer;