import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./BuyerService"

export const createBuyerThunk = createAsyncThunk(
    'buyer/createBuyer',
    async (buyer) => {
        return (await service.createBuyer(buyer))
    }
)
export const findBuyerThunk = createAsyncThunk(
    'buyer/findBuyer',
    async () => {
        return (await service.findBuyers());
    }
)

export const updateBuyerThunk =
    createAsyncThunk(
        'buyer/updateBuyer',
        async (buyer) => await service.updateBuyer(buyer)
    )

export const deleteBuyerThunk = createAsyncThunk(
    'buyer/deleteBuyer',
    async (buyerId) => {
        await service.deleteBuyer(buyerId)
        return buyerId
    }
)