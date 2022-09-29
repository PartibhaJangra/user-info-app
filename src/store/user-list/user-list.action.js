import { USER_LIST_ACTION_TYPES } from "./user-list.types";

const createAction = (type, payload) => ({ type, payload });

export const setUserList = (payload) =>
  createAction(USER_LIST_ACTION_TYPES.SET_USER_LIST, payload);
