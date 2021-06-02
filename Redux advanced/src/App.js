import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData, getCartData } from './store/cart-actions';


let isIntitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    if(isIntitial){
      isIntitial = false;
      return;
    }
    
    if(cart.changed){
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message} 
        />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
    
  );
}

export default App;
