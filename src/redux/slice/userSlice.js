import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null, // Lưu thông tin người dùng
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload; // Lưu thông tin người dùng
        },
        clearUser: (state) => {
            state.user = null; // Xóa thông tin người dùng
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;