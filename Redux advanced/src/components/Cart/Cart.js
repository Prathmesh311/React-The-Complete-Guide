import React from 'react';   
import ReactDOM from 'react-dom';   
import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const cartFeed = cartItems.map((item) => {
    return <CartItem 
      key={item.id}
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price
      }}
    />
  })

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartFeed}
      </ul>
    </Card>
  );
};

export default Cart;