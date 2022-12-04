import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./SellerService"
import {deleteSeller, findBuyerBySellerId, findOrderBySellerId, updateSeller} from "./SellerService";

export const createSellerThunk = createAsyncThunk(
    'seller/createSeller',
    async (seller) => {
        return (await service.createSeller(seller))
    }
)
export const findSellerThunk = createAsyncThunk(
    'seller/findSeller',
    async () => {
        return (await service.findSeller());
    }
)

// Find seller by seller id
export const findSellerByIdThunk = createAsyncThunk(
    'seller/findSellerById',
    async (sellerId) => {
        return (await service.findSellerById(sellerId));
    }
)

// find a list of orders by seller id
export const findOrderBySellerIdThunk = createAsyncThunk(
    'seller/findOrderBySellerIdThunk',
    async (sellerId) => {
        return (await service.findOrderBySellerId(sellerId));
    }
)

// Find buyer by seller id
export const findBuyerBySellerIdThunk = createAsyncThunk(
    'seller/findBuyerBySellerId',
    async (sellerId) => {
        return (await service.findBuyerBySellerId(sellerId));
    }
)

export const updateSellerThunk =
    createAsyncThunk(
        'seller/updateSeller',
        async (seller) => await service.updateSeller(seller)
    )

export const deleteSellerThunk = createAsyncThunk(
    'seller/deleteSeller',
    async (sellerId) => {
        await service.deleteSeller(sellerId)
        return sellerId
    }
)



