import React, {useContext} from 'react'
import {CartContext} from "../context/CartContext.jsx";

const Item = (props) => {

    const cartContext = useContext(CartContext)
    console.log(cartContext)

    return (
        <div className="item-card">
            <h4>{props.name} </h4>
            <p>${props.price}</p>
            <button onClick={()=>{
                cartContext.setItems([...cartContext.items,{name: props.name, price: props.price}])
            }}>Add to Cart</button>
        </div>
    )
}
export default Item
