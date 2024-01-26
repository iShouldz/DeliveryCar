import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./cars/carSlice";
import loginSlice from "./login/loginSlice";
const store = configureStore({
    reducer: { cars: carSlice.reducer, login: loginSlice.reducer },
});

export default store;