import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
  users: [], isLogado: false, notifications: [{
    typeSeverity: '', message: ''
  }], newNotification: false, isThemeLight: false, currentUser: '', idCurrentUser: 0
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    handleUpdateLogin(state) {
      state.isLogado = !state.isLogado
    },
    handleAddNotifications(state, actions) {
      state.notifications.push(actions.payload)
    },
    handleHideNotification(state) {
      state.newNotification = !state.newNotification
    },
    handleRemoveNotifications(state) {
      state.notifications = [{
        typeSeverity: '', message: ''
      }]
    },
    handleUserInSystem(state, actions) {
      state.currentUser = actions.payload
    },
    handleIdSystem(state, actions){
      state.idCurrentUser = actions.payload
    }
  },
});

export default userSlice;
export const userActions = userSlice.actions;