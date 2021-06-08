import React from 'react';
import cart from '../../../Assets/img/cart.png';
import './cartWidget.css';

const CartWidget = ({items, showCart}) => {
    return(
        <div className="cartDiv" onClick={() => {
            showCart();
        }}>
            <span>{items}</span>
            <img alt="logo" className="logo" src={cart} width="30" height="24"/>
        </div>
        

    );
        
}
export default CartWidget; 