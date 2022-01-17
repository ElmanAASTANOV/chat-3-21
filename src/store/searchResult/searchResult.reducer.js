import { SEARCH_RESULT_ACTION_TYPES } from "./searchResult.action-types";

const searchResultInitData = {
  data: [],
}

const searchResultReducer = (store = searchResultInitData, action) => {
  switch (action.type) {

    case SEARCH_RESULT_ACTION_TYPES.SETSEARCHRESULT:
      return {
        ...store,
        data: action.data
      }

    default:
      return store;
  }
}

export default searchResultReducer;