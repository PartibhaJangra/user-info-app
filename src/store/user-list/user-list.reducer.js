import { USER_LIST_ACTION_TYPES } from "./user-list.types";

const INITIAL_STATE = {
  userList: [],
};

export const userList = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_ACTION_TYPES.SET_USER_LIST:
      return {
        ...state,
        userList: payload,
      };
    default:
      return state;
  }
};
