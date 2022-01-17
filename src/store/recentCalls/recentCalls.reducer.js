import { RECENTCALLS_ACTION_TYPES } from './recentCalls.action-types'

const recentCallsInitData = {
  data: [],
}

const recentCallsReducer = (store = recentCallsInitData, action) => {
  switch (action.type) {

    case RECENTCALLS_ACTION_TYPES.SETRECENTCALLS:
      return {
        ...store,
        data: action.data
      }

    default:
      return store;
  }
}

export default recentCallsReducer;