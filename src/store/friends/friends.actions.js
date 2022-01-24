import { FRIENDS_ACTION_TYPES } from "./friends.action-types";

export const setFriends = (data) => ({ type: FRIENDS_ACTION_TYPES.SET_FRIENDS, data })
export const setFriendsLoading = () => ({ type: FRIENDS_ACTION_TYPES.SET_FRIENDS_LOADING})
export const setFriendsError = (error) => ({ type: FRIENDS_ACTION_TYPES.SET_FRIENDS_ERROR, data: error })
export const fetchFriends = () => ({ type: FRIENDS_ACTION_TYPES.FETCH_FRIENDS })