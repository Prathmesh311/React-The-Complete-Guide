import React, {Fragment, useContext} from 'react';
import styled from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';


function MealsItem(props){
    const price = `$${props.price.toFixed(2)}`

    const ctx = useContext(CartContext);

    const addToCartHandler= amount =>{
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return(
        <div className={styled.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styled.description}>{props.description}</div>
                <div className={styled.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToItem={addToCartHandler}/>
            </div>

        </div>
    )
}

export default MealsItem;