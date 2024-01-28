import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./cars/carSlice";
import loginSlice from "./login/loginSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {  persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
   
}

const reducer = combineReducers({
    cars: carSlice.reducer, login: loginSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);