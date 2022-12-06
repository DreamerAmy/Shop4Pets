import * as sellerDao from "../dao/sellerDao.js";

const SellerController = (app) => {
    app.post('/api/sellerhist', createSellerSoldHist);
    app.get('/api/sellerhist/all', findSellerHist);
    app.get('/api/sellerhist/:shid', findSellerHistById);
    app.get('/api/sellerhist/seller/:uid', findSellerHistBySellerId);
    app.get('/api/sellerhist/buyer/:uid', findSellerHistByBuyerId);
    app.put('/api/sellerhist/:shid', updateSeller);
    app.delete('/api/sellerhist/:shid', deleteSeller);
}

const createSellerSoldHist = async (req, res) => {
    let newSellerHist = req.body;
    const insertedSeller = await sellerDao.createSellerSoldHist(newSellerHist);
    res.json(insertedSeller);
}
const findSellerHist = async (req, res) => {
    const sellerHist = await sellerDao.findSellerHist();
    res.json(sellerHist)
}

const findSellerHistById = async (req, res) => {
    const sellerHistIdToFind = req.params.shid;
    const sellerHist = await sellerDao.findSellerHistById(sellerHistIdToFind);
    res.json(sellerHist)
}

const findSellerHistBySellerId = async (req, res) => {
    const sellerId = req.params.uid;
    const sellerHist = await sellerDao.findSellerHistBySellerId(sellerId);
    res.json(sellerHist)
}

const findSellerHistByBuyerId = async (req, res) => {
    const buyerId = req.params.uid;
    const sellerHist = await sellerDao.findSellerHistByBuyerId(buyerId);
    res.json(sellerHist)
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