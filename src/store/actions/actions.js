import { ACTION_TYPES } from "store/actionTypes";
import { getRecents } from 'api/recents';
import { LS } from 'utils';
import { appConfig } from 'config';

const userData = JSON.parse(LS.getItemLocalStorage(appConfig.userData))

export const setGroups = (data) => ({ type: ACTION_TYPES.SETGROUPS, data })

export const setRecents = (data) => ({ type: ACTION_TYPES.SETRECENTS, data })

export const fetchRecents = () => (dispatch) => {
    getRecents()
        .then(res => {
            let filtered = res.filter(data => data.user.id !== userData.id)
            dispatch(setRecents(filtered))
        })
        .catch(err => console.log(err))
}

export const setFriends = (data) => ({ type: ACTION_TYPES.SETFRIENDS, data })
export const setRecentCalls = (data) => ({ type: ACTION_TYPES.SETRECENTCALLS, data })
export const setSearchResult = (data) => ({ type: ACTION_TYPES.SETSEARCHRESULT, data })
export const setChatUser = (data) => ({ type: ACTION_TYPES.SET_CHAT_USER, data })
export const addNewMessage = (data) => ({ type: ACTION_TYPES.ADD_NEW_MESSAGE, data });