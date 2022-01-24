import { GROUPS_ACTION_TYPES } from "store/groups/groups.action-types";

export const setGroups = (data) => ({ type: GROUPS_ACTION_TYPES.SET_GROUPS, data });
export const setGroupsLoading = () => ({ type: GROUPS_ACTION_TYPES.SET_GROUPS_LOADING});
export const setGroupsError = (error) => ({ type: GROUPS_ACTION_TYPES.SET_GROUPS_ERROR, error });
export const fetchGroups = () => ({ type: GROUPS_ACTION_TYPES.FETCH_GROUPS });
