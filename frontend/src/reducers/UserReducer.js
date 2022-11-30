import { createSlice } from "@reduxjs/toolkit";
import {
    createUserThunk,
    deleteUserThunk,
    findAllUsersThunk,
    findUserByIdThunk, loginThunk, logoutThunk, profileThunk, registerThunk,
    updateUserThunk
} from "../services/UserThunks.js";

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
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
    }
});

export default userSlice.reducer;