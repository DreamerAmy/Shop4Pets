import { createSlice } from "@reduxjs/toolkit";
import { createBuyerThunk, deleteBuyerThunk, findBuyerByIdThunk, updateBuyerThunk } from "../../services/BuyerThunks.js";
// import buyer from "./Buyer.json";

const currentBuyer =
{
    "name": "currentBuyer",
    "email": "Null",
    "phone": "Null",
    "address": "Null",
    "memberSince": "Null",
    "order": "Null",
    "favorites": "Null"
}

const initialState = {
    buyer: currentBuyer,
    loading: false
}

const nullBuyer = {
    "name": "not found"
}

const buyerSlice = createSlice({
    name: 'buyer',
    initialState,
    extraReducers: {
        [createBuyerThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.buyer.push(payload)
            },
        [findBuyerByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.buyer = []
            },
        [findBuyerByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.buyer = payload
            },
        [findBuyerByIdThunk.rejected]:
            (state) => {
                state.loading = false
                state.buyer = nullBuyer
            },
        [updateBuyerThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const buyerNdx = state.buyer
                    .findIndex((b) => b._id === payload._id)
                state.buyer[buyerNdx] = {
                    ...state.buyer[buyerNdx],
                    ...payload
                }
            },
        [deleteBuyerThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.buyer = state.buyer.filter(b => b._id !== payload)
            },
    },
    reducers: {
        updateBuyer(state, action) {
            // console.log('state', action.payload.name);
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                address: action.payload.address,
                memberSince: action.payload.memberSince
            };
        }
    }
});

export const { updateBuyer } = buyerSlice.actions;
export default buyerSlice.reducer;