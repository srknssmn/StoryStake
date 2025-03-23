import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pools: [],
    currentPool: null
}

export const poolsSlice = createSlice({
    name: "pools",
    initialState,
    reducers: {
        setPools: (state, action) => {
            state.pools = action.payload;
        },
        setPool: (state, action) => {
            state.currentPool = action.payload;
        }
    }
})

export const {setPools, setPool} = poolsSlice.actions;
export default poolsSlice.reducer;