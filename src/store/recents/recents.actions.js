import { RECENTS_ACTION_TYPES } from './recents.action-types'

export const setRecents = (data) => ({ type: RECENTS_ACTION_TYPES.SET_RECENTS, data })
export const setRecentsLoading = () => ({ type: RECENTS_ACTION_TYPES.SET_RECENTCALLS });
export const setRecentsError = (error) => ({ type: RECENTS_ACTION_TYPES.SET_RECENTS, data: error });
export const fetchRecents = () => ({ type: RECENTS_ACTION_TYPES.SET_RECENTS });