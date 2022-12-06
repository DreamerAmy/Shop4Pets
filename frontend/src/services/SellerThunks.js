import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./SellerService"

export const createSellerSoldHistThunk = createAsyncThunk(
    'sellerhist/createSellerHist',
    async (seller) => {
        return (await service.createSellerSoldHist(seller))
    }
)

//find all sellerHist
export const findSellerHistThunk = createAsyncThunk(
    'sellerhist/findSellerHist',
    async () => {
        return (await service.findSellerHist());
    }
)

// find sellerHist by sellerHist id
export const findSellerHistByIdThunk = createAsyncThunk(
    'sellerhist/findSellerHistById',
    async (sellerHistId) => {
        return (await service.findSellerHistById(sellerHistId));
    }
)

// find sellerHist by sellerId
export const findSellerHistBySellerIdThunk = createAsyncThunk(
    'sellerhist/findSellerHistBySellerId',
    async (sellerId) => {
        return (await service.findSellerHistBySellerId(sellerId));
    }
)

// find sellerHist by buyerId
export const findSellerHistByBuyerIdThunk = createAsyncThunk(
    'sellerhist/findSellerHistByBuyerId',
    async (buyerId) => {
        return (await service.findSellerHistByBuyerId(buyerId));
    }
)

export const updateSellerHistThunk =
    createAsyncThunk(
        'sellerhist/updateSellerHist',
        async (sellerHist) => await service.updateSellerHist(sellerHist)
    )

export const deleteSellerThunk = createAsyncThunk(
    'sellerhist/deleteSeller',
    async (sellerId) => {
        await service.deleteSeller(sellerId)
        return sellerId
    }
)



