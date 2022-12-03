import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./UserService"
import { findAllUsers, login, logout, profile, register } from "./UserService";

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

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)