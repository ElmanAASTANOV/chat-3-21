import { combineReducers } from "redux";
import groupsReducer from './groups/groups.reducer';
import recentsReducer from './recents/recents.reducer';
import friendsReducer from "./friends/friends.reducer";
import recentCallsReducer from "./recentCalls/recentCalls.reducer";
import chatUserReducer from "./chatUser/chatUser.reducer";
import addNewMessageReducer from "./addNewMessage/addNewMessage.reducer";
import searchResultReducer from "./searchResult/searchResult.reducer";

const rootReducer = combineReducers({
  groups: groupsReducer,
  recents: recentsReducer,
  friends: friendsReducer,
  recentCalls: recentCallsReducer,
  chatUser: chatUserReducer,
  addNewMessage: addNewMessageReducer,
  searchResult: searchResultReducer,
})

export default rootReducer;