import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
  users: [], isLogado: true, notifications: [{
    typeSeverity: '', message: ''
  }], newNotification: false, isThemeLight: false
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
    }
  },
});

export default userSlice;
export const userActions = userSlice.actions;