import { createSlice } from "@reduxjs/toolkit";
const initialCarsState = { fetching: false };

const carSlice = createSlice({
    name: 'cars',
    initialState: initialCarsState,
    reducers: {
        handleFetching(state){
            state.fetching = !state.fetching
        }
    }
})

export default carSlice;
export const carActions = carSlice.actions;