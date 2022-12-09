import { createSlice } from "@reduxjs/toolkit";
import { createOrderThunk, findOrderThunk, deleteOrderThunk, findOrderByIdThunk, findOrderByBuyerIdThunk, updateOrderThunk } from "../services/OrderThunks.js";


const initialState = {
    order: [],
    loading: false
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: {
        [createOrderThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.order.push(payload)
            },
        [findOrderThunk.pending]:
            (state) => {
                state.loading = true
                state.orderList = []
            },
        [findOrderThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.orderList = payload
            },
        [findOrderThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [findOrderByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.orderItem = null
            },
        [findOrderByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.orderItem = payload
            },
        [findOrderByIdThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [findOrderByBuyerIdThunk.pending]:
            (state) => {
                state.loading = true
                state.order = []
            },
        [findOrderByBuyerIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.order = payload
            },
        [findOrderByBuyerIdThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [updateOrderThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const orderNdx = state.order
                    .findIndex((o) => o._id === payload._id)
                state.order[orderNdx] = {
                    ...state.order[orderNdx],
                    ...payload
                }
            },
        [deleteOrderThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.order = state.order.filter(o => o._id !== payload)
            },
    }
});

export default orderSlice.reducer;