import { createSlice } from "@reduxjs/toolkit";
import { createUserThunk, deleteUserThunk, findUserByIdThunk, updateUserThunk } from "../../services/UserThunks.js";

const currentUser =
{
    "name": "currentUser",
    "email": "Null",
    "phone": "Null",
    "address": "Null",
    "memberSince": "Null",
    "order": "Null",
    "favorites": "Null"
}

const initialState = {
    user: currentUser,
    loading: false
}

const nullUser = {
    "name": "not found"
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [createUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.user.push(payload)
            },
        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.user = []
            },
        [findUserByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.user = payload
            },
        [findUserByIdThunk.rejected]:
            (state) => {
                state.loading = false
                state.user = nullUser
            },
        [updateUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const userNdx = state.user
                    .findIndex((u) => u._id === payload._id)
                state.user[userNdx] = {
                    ...state.user[userNdx],
                    ...payload
                }
            },
        [deleteUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.user = state.user.filter(u => u._id !== payload)
            },
    }
});

export default userSlice.reducer;