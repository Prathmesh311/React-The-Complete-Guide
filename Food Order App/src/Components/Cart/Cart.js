import Recat, { useContext, useState } from 'react';
import styled from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import userEvent from '@testing-library/user-event';
import React from 'react';

function Cart(props){
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);

    const ctx = useContext(CartContext);

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const isItemPresent = ctx.items.length > 0;

    const cartItemRemoveHandler = (id) =>{
        ctx.removeItem(id);

    }

    const cartItemAddHandler = (item) =>  {
        ctx.addItem({...item, amount: 1});

    }

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-10733-default-rtdb.firebaseio.com/orders.json',{
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderData: ctx.items
            })
        });
        setIsSubmitting(false);
        setIsSubmited(true);
        ctx.clearCart();
    }

    const cartItems = <ul className={styled['cart-items']}> {ctx.items.map(
        item => (
        <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item)}
        />
    ))}</ul>

    const cartModal = (
        <Recat.Fragment>
            {cartItems}
            <div className={styled.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitHandler} onCancel={props.onCloseCart}/>}
            {!isCheckout && <div className={styled.actions}>
                <button className={styled['button--alt']} onClick={props.onCloseCart}>Close</button>
                {isItemPresent && <button className={styled.button} onClick={orderHandler}>Order</button>}
            </div>}
        </Recat.Fragment>
    )

    const orderPlaced = (
        <React.Fragment>
            <h3>Order Placed Successfully!</h3>
            <div className={styled.actions}>
                <button className={styled.button} 
                    onClick={props.onCloseCart}>Close</button>
            </div>

        </React.Fragment>
    )

    const orderSubmitting = (
        <React.Fragment>
            <h3>Placing order...</h3>
        </React.Fragment>
    )
    
    return(
        <Modal onClose={props.onCloseCart}>
            {isSubmitting && orderSubmitting}
            {!isSubmitting && !isSubmited && cartModal}
            {isSubmited && orderPlaced}
        </Modal>
    )
}

export default Cart;