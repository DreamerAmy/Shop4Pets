import { createSlice } from "@reduxjs/toolkit";
import {
    createUserThunk,
    findUserThunk,
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
    user: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [createUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.userLoading = false
                state.user.push(payload)
            },
        [findUserThunk.pending]:
            (state) => {
                state.loading = true
                state.userLoading = true
                state.user = []
            },
        [findUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.userLoading = false
                state.user = payload
            },
        [findUserThunk.rejected]:
            (state) => {
                state.loading = false
                state.userLoading = false
            },
        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.userLoading = true
                state.user = []
            },
        [findUserByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.user = payload
                state.userLoading = false
            },
        [findUserByIdThunk.rejected]:
            (state) => {
                state.loading = false
                state.userLoading = false
            },
        [updateUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const userNdx = state.user.findIndex((u) => u._id === payload._id)
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
            state.loggedIn = true
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.loggedIn = false
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
            state.loggedIn = false
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