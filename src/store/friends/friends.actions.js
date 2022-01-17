import { getFriends } from "api/friends";
import { FRIENDS_ACTION_TYPES } from "./friends.action-types";

export const setFriends = (data) => ({ type: FRIENDS_ACTION_TYPES.SETFRIENDS, data })

export const fetchFriends = () => dispatch => {
    getFriends()
        .then(data => {
            dispatch(setFriends(data))
        })
        .catch(err => console.log(err))
}