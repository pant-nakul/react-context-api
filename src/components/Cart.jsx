import React from 'react'
import {useCart} from "../context/CartContext.jsx";

const Cart = () => {
    const cart = useCart();
    const total = cart.items.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <h1>Cart</h1>

            {cart.items.map((item, i) => {
                return (<li key={i}> {item.name} - ${item.price} |
                    <button onClick={() => cart.removeItems(item)}>Remove from cart</button></li>)
            })}


            <h5> Total Bill : ${total}</h5>
        </div>
    )
}
export default Cart
