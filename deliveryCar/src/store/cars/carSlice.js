import { createSlice } from "@reduxjs/toolkit";
const initialCarsState = { fetching: 'form', item: [] };

const carSlice = createSlice({
    name: 'cars',
    initialState: initialCarsState,
    reducers: {
        handleFetching(state, action){
            state.fetching = action.payload
        },
        handleCarItem(state, action){
            state.item = action.payload
        }
    }
})

export default carSlice;
export const carActions = carSlice.actions;