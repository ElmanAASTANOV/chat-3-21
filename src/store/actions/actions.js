import { ACTION_TYPES } from "store/actionTypes";
import { getRecents } from 'api/recents';
import { getFriends } from "api/friends";
import { getGroups } from "api/groups";
import { LS } from 'utils';
import { appConfig } from 'config';
import { getRecentCalls } from "api/recentCalls";

const userData = JSON.parse(LS.getItemLocalStorage(appConfig.userData))

export const setGroups = (data) => ({ type: ACTION_TYPES.SETGROUPS, data })

export const fetchGroups = (dispatch) => {
    getGroups()
        .then(data => {
            dispatch(setGroups(data))
        })
        .catch(err => console.log(err))
}

export const setRecents = (data) => ({ type: ACTION_TYPES.SETRECENTS, data })

export const fetchRecents = () => (dispatch) => {
    getRecents()
        .then(data => {
            let filtered = data.filter(data => data.user.id !== userData.id)
            dispatch(setRecents(filtered))
        })
        .catch(err => console.log(err))
}

export const setFriends = (data) => ({ type: ACTION_TYPES.SETFRIENDS, data })

export const fetchFriends = () => dispatch => {
    getFriends()
        .then(data => {
            dispatch(setFriends(data))
        })
        .catch(err => console.log(err))
}

export const setRecentCalls = (data) => ({ type: ACTION_TYPES.SETRECENTCALLS, data })

// export const fetchRecentCalls = () => (dispatch) {
//     getRecentCalls()
//         .then(data => {
//             dispatch(setRecentCalls(data))
//         })
//         .catch(err => console.log(err))
// }

export const setSearchResult = (data) => ({ type: ACTION_TYPES.SETSEARCHRESULT, data })
export const setChatUser = (data) => ({ type: ACTION_TYPES.SET_CHAT_USER, data })
export const addNewMessage = (data) => ({ type: ACTION_TYPES.ADD_NEW_MESSAGE, data });