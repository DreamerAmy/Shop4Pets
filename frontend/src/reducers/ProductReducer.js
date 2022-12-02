import { createSlice } from "@reduxjs/toolkit";
import { createProductThunk, deleteProductThunk, findProductThunk, findProductByIdThunk, updateProductThunk } from "../services/ProductThunks.js";


const initialState = {
    product: [],
    loading: false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [createProductThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.product.push(payload)
            },
        [findProductThunk.pending]:
            (state) => {
                state.loading = true
                state.product = []

            },
        [findProductThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.product = payload

            },
        [findProductThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [findProductByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.productItem = []
            },
        [findProductByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.productItem = payload
            },
        [findProductByIdThunk.rejected]:
            (state) => {
                state.loading = false
                state.productItem = []
            },
        [updateProductThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const productNdx = state.product
                    .findIndex((p) => p._id === payload._id)
                state.product[productNdx] = {
                    ...state.product[productNdx],
                    ...payload
                }
            },
        [deleteProductThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.product = state.product.filter(p => p._id !== payload)
            },
    }
});

export default productSlice.reducer;