import { RECENTCALLS_ACTION_TYPES } from './recentCalls.action-types'

const recentCallsInitData = {
  data: [],
  loading: false,
  error: ''
}

const recentCallsReducer = (store = recentCallsInitData, action) => {
  switch (action.type) {

    case RECENTCALLS_ACTION_TYPES.SET_RECENTCALLS:
      return {
        ...store,
        ...recentCallsInitData,
        data: action.data
      }

    case RECENTCALLS_ACTION_TYPES.SET_RECENTCALLS_LOADING:
      return {
        ...store,
        ...recentCallsInitData,
        loading: true
      }

    case RECENTCALLS_ACTION_TYPES.SET_RECENTCALLS_ERROR:
      return {
        ...store,
        ...recentCallsInitData,
        error: action.data
      }

    default:
      return store;
  }
}

export default recentCallsReducer;