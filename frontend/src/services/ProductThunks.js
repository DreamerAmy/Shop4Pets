import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./ProductService"

export const createProductThunk = createAsyncThunk(
    'product/createProduct',
    async (product) => {
        return (await service.createProduct(product))
    }
)
export const findProductThunk = createAsyncThunk(
    'product/findProduct',
    async () => {
        return (await service.findProduct());
    }
)

// Find product by product id
export const findProductByIdThunk = createAsyncThunk(
    'product/findProductById',
    async (productId) => {
        return (await service.findProductById(productId));
    }
)

// Find product by product id
export const findProductBySellerIdThunk = createAsyncThunk(
    'product/findProductById',
    async (sellerId) => {
        return (await service.findProductBySellerId(sellerId));
    }
)


export const updateProductThunk =
    createAsyncThunk(
        'product/updateProduct',
        async (product) => await service.updateProduct(product)
    )

export const deleteProductThunk = createAsyncThunk(
    'product/deleteProduct',
    async (productId) => {
        await service.deleteProduct(productId)
        return productId
    }
)