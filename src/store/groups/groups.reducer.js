import { GROUPS_ACTION_TYPES } from "store/groups/groups.action-types";

const groupsInitData = {
  data: [],
}


const groupsReducer = (store = groupsInitData, action) => {
  switch (action.type) {
    case GROUPS_ACTION_TYPES.SETGROUPS:
      return {
        ...store,
        data: action.data
      };

    default:
      return store;
  }
}

export default groupsReducer;