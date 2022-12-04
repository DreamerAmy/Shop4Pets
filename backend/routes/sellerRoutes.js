import * as orderDao from '../dao/orderDao.js'
const OrderController = (app) => {
    app.post('/api/order', createOrder);
    app.get('/api/order/all', findOrder);
    app.get('/api/order/buyer/:uid', findOrderByBuyerId);
    app.get('/api/order/:oid', findOrderById);
    app.put('/api/order/:oid', updateOrder);
    app.delete('/api/order/:oid', deleteOrder);
}

const createOrder = async (req, res) => {
    let newOrder = req.body;
    const insertedOrder = await orderDao.createOrder(newOrder);
    res.json(insertedOrder);
}
const findOrder = async (req, res) => {
    const order = await orderDao.findOrder();
    res.json(order)
}

const findOrderById = async (req, res) => {
    const orderIdToFind = req.params.oid;
    const order = await orderDao.findOrderById(orderIdToFind);
    res.json(order)
}

const findOrderByBuyerId = async (req, res) => {
    const buyerId = req.params.uid;
    const order = await orderDao.findOrderByBuyerId(buyerId);
    res.json(order)
}


const updateOrder = async (req, res) => {
    const orderIdToUpdate = req.params.oid;
    const updates = req.body;
    const status = await orderDao.updateOrder(orderIdToUpdate, updates);
    res.json(status);
}

const deleteOrder = async (req, res) => {
    const orderIdToDelete = req.params.oid;
    const status = await orderDao.deleteOrder(orderIdToDelete);
    res.json(status);
}

export default OrderController;