import { createSlice } from "@reduxjs/toolkit";
import buyer from "./Buyer.json";

const buyerSlice = createSlice({
    name: 'buyer',
    initialState: buyer,
    reducers: {
        updateBuyer(state, action) {
            console.log('state', action.payload.name);
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