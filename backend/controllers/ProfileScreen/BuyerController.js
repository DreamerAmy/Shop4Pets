import * as buyerDao from '../../controllers/ProfileScreen/BuyerDao.js'
const BuyersController = (app) => {
    app.post('/api/buyer', createBuyer);
    app.get('/api/buyer', findBuyers);
    app.put('/api/buyer/:tid', updateBuyer);
    app.delete('/api/buyer/:tid', deleteBuyer);
}

const createBuyer = async (req, res) => {
    let newBuyer = req.body;
    const insertedBuyer = await buyerDao.createBuyer(newBuyer);
    res.json(insertedBuyer);
}
const findBuyers = async (req, res) => {
    const buyer = await buyerDao.findBuyers();
    res.json(buyer)
}
const updateBuyer = async (req, res) => {
    const buyerIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await buyerDao.updateBuyer(buyerIdToUpdate, updates);
    res.json(status);
}

const deleteBuyer = async (req, res) => {
    const buyerIdToDelete = req.params.tid;
    const status = await buyerDao.deleteBuyer(buyerIdToDelete);
    res.json(status);
}


export default BuyersController