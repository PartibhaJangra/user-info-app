import { combineReducers } from "redux";

import { userList } from "./user-list/user-list.reducer";

export const rootReducer = combineReducers({
  userList: userList,
});
