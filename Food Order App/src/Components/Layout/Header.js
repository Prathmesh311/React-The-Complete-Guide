import React from 'react';
import styled from './Header.module.css';
import MealsImage from '../../Assets/meals.jpg'; 
import HeaderCartButton from './HeaderCartbutton';

function Header(props){

    return(
        <React.Fragment>
            <header className={styled.header}>
                <h2>Order App</h2>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styled['main-image']}>
                <img src={MealsImage} alt="Image of table full of Delicious food"/>
            </div>
        </React.Fragment>
    )
}

export default Header;