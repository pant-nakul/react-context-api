import {createContext, useContext, useState} from "react";
import React from "react";

export const CartContext = createContext(null);

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ( props) => {

    const [items,setItems] = useState([]);

    const removeItems = (itemObj) => {
        const updatedCart = items.filter(item => item.name !== itemObj.name)
        setItems(updatedCart);
    }

    return (
        <CartContext.Provider value={{ items,setItems, removeItems }}>
            {props?.children}
        </CartContext.Provider>
    )
}