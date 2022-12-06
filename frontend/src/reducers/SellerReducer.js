import { createSlice } from "@reduxjs/toolkit";
import {
    createSellerSoldHistThunk,
    deleteSellerThunk,
    findSellerHistByBuyerIdThunk,
    findSellerHistByIdThunk,
    findSellerHistBySellerIdThunk,
    updateSellerHistThunk
} from "../services/SellerThunks";


const initialState = {
    seller: [],
    loading: false
}

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    extraReducers: {
        [createSellerSoldHistThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.seller.push(payload)
            },


        [findSellerHistByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.sellerItem = null
            },
        [findSellerHistByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.sellerItem = payload
            },
        [findSellerHistByIdThunk.rejected]:
            (state) => {
                state.loading = false
            },


        [findSellerHistBySellerIdThunk.pending]:
            (state) => {
                state.loading = true
                state.seller = []
            },
        [findSellerHistBySellerIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.seller = payload
            },
        [findSellerHistBySellerIdThunk.rejected]:
            (state) => {
                state.loading = false
            },



        [findSellerHistByBuyerIdThunk.pending]:
            (state) => {
                state.loading = true
                state.seller = []
            },
        [findSellerHistByBuyerIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.seller = payload
            },
        [findSellerHistByBuyerIdThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [updateSellerHistThunk.fulfilled]:
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