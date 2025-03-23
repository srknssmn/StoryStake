import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: null,
    userPortfolio: []
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccount: (state, action) => {
            localStorage.setItem('wallet', JSON.stringify(action.payload));
            state.account = action.payload;
        },
        logout: (state, action) => {
            localStorage.clear();
            state.account = null;
        },
        setUserPortfolio: (state, action) => {
            state.userPortfolio = action.payload;
        }
    }
})

export const {setAccount, logout, setUserPortfolio} = accountSlice.actions;
export default accountSlice.reducer;