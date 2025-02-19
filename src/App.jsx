import './App.css'
import CounterOperations from "./components/CounterOperations.jsx";
import {useContext} from "react";
import {CounterContext} from "./context/CounterContext.jsx";

function App() {

    const counterState = useContext(CounterContext);
    console.log("Context State", counterState);

    return (
        <>
            <h1>
                Count is {counterState.count}
            </h1>
            <CounterOperations/>
            <br/>
            <CounterOperations/>
            <br/>
            <CounterOperations/>
            <br/>
            <CounterOperations/>
            <br/>
        </>
    )
}

export default App
