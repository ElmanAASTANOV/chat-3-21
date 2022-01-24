import { GROUPS_ACTION_TYPES } from "store/groups/groups.action-types";

const groupsInitData = {
  data: [],
  loading: false,
  error: ''
}


const groupsReducer = (store = groupsInitData, action) => {
  switch (action.type) {
    case GROUPS_ACTION_TYPES.SET_GROUPS:
      return {
        ...store,
        ...groupsInitData,
        data: action.data
      };

    case GROUPS_ACTION_TYPES.SET_GROUPS_LOADING:
      return {
        ...store,
        ...groupsInitData,
        loading: true
      };

    case GROUPS_ACTION_TYPES.SET_GROUPS_ERROR:
      return {
        ...store,
        ...groupsInitData,
        error: action.data
      };

    default:
      return store;
  }
}

export default groupsReducer;