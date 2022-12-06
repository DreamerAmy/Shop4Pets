import * as productDao from '../dao/productDao.js';
const ProductController = (app) => {
  app.post('/api/product', createProduct);
  app.get('/api/product/all', findProduct);
  app.get('/api/product/seller/:uid', findProductBySellerId);
  app.get('/api/product/search', searchProduct);
  app.get('/api/product/:pid', findProductById);
  app.put('/api/product/:pid', updateProduct);
  app.delete('/api/product/:pid', deleteProduct);
};

const createProduct = async (req, res) => {
  let newProduct = req.body;
  const insertedProduct = await productDao.createProduct(newProduct);
  res.json(insertedProduct);
};
const findProduct = async (req, res) => {
  const product = await productDao.findProduct();
  res.json(product);
};

const findProductById = async (req, res) => {
  const productIdToFind = req.params.pid;
  const product = await productDao.findProductById(productIdToFind);
  res.json(product);
};

const findProductBySellerId = async (req, res) => {
  const sellerId = req.params.uid;
  const product = await productDao.findProductBySellerId(sellerId);
  res.json(product);
};

const updateProduct = async (req, res) => {
  const productIdToUpdate = req.params.pid;
  const updates = req.body;
  const status = await productDao.updateProduct(productIdToUpdate, updates);
  res.json(status);
};

const deleteProduct = async (req, res) => {
  const productIdToDelete = req.params.pid;
  const status = await productDao.deleteProduct(productIdToDelete);
  res.json(status);
};

const searchProduct = async (req, res) => {
  const { query } = req;
  const searchQuery = query.query || '';
  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          productName: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {};
  const products = await productDao.searchProduct(queryFilter);
  res.json(products);
};

export default ProductController;
