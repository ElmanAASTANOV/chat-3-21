import { ACTION_TYPES } from "store/actionTypes"

export const setGroups = (data) => ({ type: ACTION_TYPES.SETGROUPS, data })
export const setRecents = (data) => ({ type: ACTION_TYPES.SETRECENTS, data })
export const setFriends = (data) => ({ type: ACTION_TYPES.SETFRIENDS, data })
export const setRecentCalls = (data) => ({ type: ACTION_TYPES.SETRECENTCALLS, data })