import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import '../../screens/ProfileScreen/index.css';
import { findProductThunk } from '../../services/ProductThunks';

function AddQuantityToProducts(product, pidList, quantityList) {
  let newProductArray = [];
  for (var i = 0; i < product.length; i++) {
    for (var j = 0; j < pidList.length; j++)
      if (pidList[j] === product[i]._id) {
        let temp = Object.assign({}, product[i], {
          quantitySold: quantityList[j],
        });
        newProductArray = [...newProductArray, temp];
      }
  }
  return newProductArray;
}

const ProductList = ({ order }) => {
  console.log(order)
  let pidList = order.productBought;
  let quantityList = order.productQuantity;
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(findProductThunk()); }, []);
  let newProductArray = AddQuantityToProducts(product, pidList, quantityList);

  return (
    <>
      <ul className="list-group ps-2 mt-2 mb-2">
        {newProductArray.map((p) => {
          return <ProductItem key={p.productId} product={p} />;
        })}
      </ul>
    </>
  );
};
export default ProductList;
