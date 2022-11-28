import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./UserService"

export const createUserThunk = createAsyncThunk(
    'user/createUser',
    async (user) => {
        return (await service.createUser(user))
    }
)
export const findUserThunk = createAsyncThunk(
    'user/findUser',
    async () => {
        return (await service.findUser());
    }
)
export const findUserByIdThunk = createAsyncThunk(
    'user/findUserById',
    async (userId) => {
        return (await service.findUserById(userId));
    }
)
export const updateUserThunk =
    createAsyncThunk(
        'user/updateUser',
        async (user) => await service.updateUser(user)
    )

export const deleteUserThunk = createAsyncThunk(
    'user/deleteUser',
    async (userId) => {
        await service.deleteUser(userId)
        return userId
    }
)