import { createSlice } from "@reduxjs/toolkit";
import seller from "./seller.json"


const sellerSlice = createSlice({
    name: 'seller',
    initialState: seller,
    reducers: {
        updateSeller(state, action) {
            console.log('state', action.payload.name);
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                location: action.payload.location,
                since: action.payload.since
            };
        }
    }
});

export const { updateSeller } = sellerSlice.actions;
export default sellerSlice.reducer;