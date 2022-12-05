import * as sellerDao from "../dao/sellerDao.js";

const SellerController = (app) => {
    app.post('/api/seller', createSeller);
    app.get('/api/seller/all', findSeller);
    app.get('/api/seller/:uid', findSellerById);
    app.get('/api/order/seller/:sid', findOrderBySellerId);
    app.get('/api/buyer/seller/:sid', findBuyerBySellerId);
    app.put('/api/seller/:sid', updateSeller);
    app.delete('/api/seller/:sid', deleteSeller);
}

const createSeller = async (req, res) => {
    let newSeller = req.body;
    const insertedSeller = await sellerDao.createSeller(newSeller);
    res.json(insertedSeller);
}
const findSeller = async (req, res) => {
    const seller = await sellerDao.findSeller();
    res.json(seller)
}

const findSellerById = async (req, res) => {
    const sellerIdToFind = req.params.oid;
    const seller = await sellerDao.findSellerById(sellerIdToFind);
    res.json(seller)
}

const findOrderBySellerId = async (req, res) => {
    const sellerId = req.params.uid;
    const order = await sellerDao.findOrderBySellerId(sellerId);
    res.json(order)
}

const findBuyerBySellerId = async (req, res) => {
    const sellerId = req.params.uid;
    const buyer = await sellerDao.findBuyerBySellerId(sellerId);
    res.json(buyer)
}

const updateSeller = async (req, res) => {
    const sellerIdToUpdate = req.params.oid;
    const updates = req.body;
    const status = await sellerDao.updateSeller(sellerIdToUpdate, updates);
    res.json(status);
}

const deleteSeller = async (req, res) => {
    const sellerIdToDelete = req.params.oid;
    const status = await sellerDao.deleteSeller(sellerIdToDelete);
    res.json(status);
}

export default SellerController;