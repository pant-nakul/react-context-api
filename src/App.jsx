import './App.css'
import {useContext} from "react";
import {CounterContext} from "./context/CounterContext.jsx";
import Item from "./components/Item.jsx";
import Cart from "./components/Cart.jsx";

function App() {

    return (
        <div className="App">
            <Item name={"Macbook"} price={100000}/>
            <Item name={"iPhone"} price={50000}/>
            <Item name={"iPad"} price={60000}/>

            <Cart/>
        </div>
    )
}

export default App
