import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProductByIdThunk } from '../services/ProductThunks';
import '../screens/ProfileScreen/index.css';
import foodImage from '../images/food2.jpg';
import UpdateFavComponent from '../components/UpdateFavComponent';
import { Store } from '../Store';


const ProductScreen = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/')
  let pid = paths[2];
  if (pid) { return <ShowProductScreen pid={pid} /> }
}


const ShowProductScreen = ({ pid }) => {
  let { productItem } = useSelector((state) => state.productItem)
  let { currentUser } = useSelector((state) => state.user);
  if (!currentUser) {
    currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  }
  const dispatch = useDispatch()
  useEffect(() => {
    if (!pid) { return; }
    dispatch(findProductByIdThunk(pid))
  }, [])

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;


  // Drop down part
  const getInitialState = () => {
    const value = 1;
    return value;
  };
  const [quantity, setQuantity] = useState(getInitialState);
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  // Add to cart button
  const passToCart = async (item, quan) => {
    // pass quantity variable to cart
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + quan : quan;
    if (item.unitInStock < quantity) {
      window.alert('Sorry. HomeProduct is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-2"></div>
        <div className="col-3">
          <h2 className="">Product Detail</h2>
          {productItem && <img className="productImg" src={`${productItem.image}`} alt="" />}
        </div>
        <div className="col-5">
          {productItem && (
            <>
              <h3 className="mt-5"> {productItem.productName}</h3>
              <div className="productDescription">
                {' '}
                {productItem.description}
              </div>
              <div className="productPrice"> ${productItem.price}</div>
              {!currentUser && <>Please sign in to favorite the item.</>}
              {currentUser && pid && <UpdateFavComponent uid={currentUser._id} pid={pid} />}
              <div className="pt-3">
                <select
                  value={quantity}
                  onChange={handleChange}
                  className="dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div className="dropdownHint">{`Hurry up! Add ${quantity} to your cart!`}</div>
              </div>
              <button
                className="btn btn-default cartBtn"
                onClick={() => passToCart(productItem, parseInt(quantity))}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default ProductScreen;
