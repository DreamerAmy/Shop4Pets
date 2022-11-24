import * as buyerDao from './buyerDao.js'
const BuyerController = (app) => {
    app.post('/api/buyer', createBuyer);
    app.get('/api/buyer', findBuyer);
    app.get('/api/buyer/:bid', findBuyerById);
    app.put('/api/buyer/:bid', updateBuyer);
    app.delete('/api/buyer/:bid', deleteBuyer);
}

const createBuyer = async (req, res) => {
    let newBuyer = req.body;
    const insertedBuyer = await buyerDao.createBuyer(newBuyer);
    res.json(insertedBuyer);
}
const findBuyer = async (req, res) => {
    const buyer = await buyerDao.findBuyer();
    res.json(buyer)
}

const findBuyerById = async (req, res) => {
    const buyerIdToFind = req.params.bid;
    const buyer = await buyerDao.findBuyerById(buyerIdToFind);
    res.json(buyer)
}

const updateBuyer = async (req, res) => {
    const buyerIdToUpdate = req.params.bid;
    const updates = req.body;
    const status = await buyerDao.updateBuyer(buyerIdToUpdate, updates);
    res.json(status);
}

const deleteBuyer = async (req, res) => {
    const buyerIdToDelete = req.params.bid;
    const status = await buyerDao.deleteBuyer(buyerIdToDelete);
    res.json(status);
}

export default BuyerController