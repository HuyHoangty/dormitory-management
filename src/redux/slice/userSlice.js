import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null, // Lưu thông tin người dùng
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // console.log("action", action)
            // state.user = action.payload; // Lưu thông tin người dùng
            state.user = { ...state.user, ...action.payload };
        },
        clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;