import { getRecents } from 'api/recents';
import { RECENTS_ACTION_TYPES } from './recents.action-types'
import { LS } from 'utils';
import { appConfig } from 'config';

const userData = JSON.parse(LS.getItemLocalStorage(appConfig.userData))


export const setRecents = (data) => ({ type: RECENTS_ACTION_TYPES.SETRECENTS, data })

export const fetchRecents = () => (dispatch) => {
    getRecents()
        .then(data => {
            let filtered = data.filter(data => data.user.id !== userData.id)
            dispatch(setRecents(filtered))
        })
        .catch(err => console.log(err))
}