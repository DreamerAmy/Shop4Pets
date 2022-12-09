import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./OrderService"

export const createOrderThunk = createAsyncThunk(
    'order/createOrder',
    async (order) => {
        return (await service.createOrder(order))
    }
)
export const findOrderThunk = createAsyncThunk(
    'order/findOrder',
    async () => {
        return (await service.findOrder());
    }
)

// Find order by order id
export const findOrderByIdThunk = createAsyncThunk(
    'order/findOrderById',
    async (orderId) => {
        return (await service.findOrderById(orderId));
    }
)

// find a list of orders by buyer id
export const findOrderByBuyerIdThunk = createAsyncThunk(
    'order/findOrderByBuyerIdThunk',
    async (buyerId) => {
        return (await service.findOrderByBuyerId(buyerId));
    }
)

export const updateOrderThunk =
    createAsyncThunk(
        'order/updateOrder',
        async (order) => await service.updateOrder(order)
    )

export const deleteOrderThunk = createAsyncThunk(
    'order/deleteOrder',
    async (orderId) => {
        await service.deleteOrder(orderId)
        return orderId
    }
)



