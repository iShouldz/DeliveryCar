import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = { users: [], isLogado: true };

const userSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    handleUpdateLogin(state){
        state.isLogado = !state.isLogado
    }
  },
});

export default userSlice;
export const userActions = userSlice.actions;