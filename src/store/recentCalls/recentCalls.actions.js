import { RECENTCALLS_ACTION_TYPES } from './recentCalls.action-types'

export const setRecentCalls = (data) => ({ type: RECENTCALLS_ACTION_TYPES.SET_RECENTCALLS, data });
export const setRecentCallsLoading = () => ({ type: RECENTCALLS_ACTION_TYPES.SET_RECENTCALLS });
export const setRecentCallsError = (error) => ({ type: RECENTCALLS_ACTION_TYPES.SET_RECENTCALLS, data: error });
export const fetchRecentCalls = () => ({ type: RECENTCALLS_ACTION_TYPES.SET_RECENTCALLS });