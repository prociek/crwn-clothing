import { createStore } from "redux";
import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selsectCurrentUser = createSelector(
  selectUser,
  user => user.currentUser
);
