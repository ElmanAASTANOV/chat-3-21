import { getRecentCalls } from "api/recentCalls";
import { RECENTCALLS_ACTION_TYPES } from './recentCalls.action-types'

export const setRecentCalls = (data) => ({ type: RECENTCALLS_ACTION_TYPES.SETRECENTCALLS, data })

export const fetchRecentCalls = () => (dispatch) => {
  getRecentCalls()
    .then(data => {
      dispatch(setRecentCalls(data))
    })
    .catch(err => console.log(err))
}