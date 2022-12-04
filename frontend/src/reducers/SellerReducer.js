import { createSlice } from "@reduxjs/toolkit";
import {
    createSellerThunk, deleteSellerThunk, findBuyerBySellerIdThunk,
    findOrderBySellerIdThunk,
    findSellerByIdThunk,
    findSellerThunk, updateSellerThunk
} from "../services/SellerThunks";

const initialState = {
    seller: [],
    loading: false
}

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    extraReducers: {
        [createSellerThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.seller.push(payload)
            },
        [findSellerThunk.pending]:
            (state) => {
                state.loading = true
                state.sellerItem = null
            },
        [findSellerByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.sellerItem = payload
            },
        [findSellerByIdThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [findOrderBySellerIdThunk.pending]:
            (state) => {
                state.loading = true
                state.seller = []
            },
        [findOrderBySellerIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.seller = payload
            },
        [findOrderBySellerIdThunk.rejected]:
            (state) => {
                state.loading = false
            },

        [findBuyerBySellerIdThunk.pending]:
            (state) => {
                state.loading = true
                state.seller = []
            },
        [findBuyerBySellerIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.seller = payload
            },
        [findBuyerBySellerIdThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [updateSellerThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const sellerNdx = state.seller
                    .findIndex((s) => s._id === payload._id)
                state.order[sellerNdx] = {
                    ...state.seller[sellerNdx],
                    ...payload
                }
            },
        [deleteSellerThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.seller = state.seller.filter(s => s._id !== payload)
            },
    }
});

export default sellerSlice.reducer;