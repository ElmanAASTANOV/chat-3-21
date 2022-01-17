import { getGroups } from "api/groups";
import { GROUPS_ACTION_TYPES } from "store/groups/groups.action-types";

export const setGroups = (data) => ({ type: GROUPS_ACTION_TYPES.SETGROUPS, data })

export const fetchGroups = () => (dispatch) => {
    getGroups()
        .then(data => {
            dispatch(setGroups(data))
        })
        .catch(err => console.log(err))
}