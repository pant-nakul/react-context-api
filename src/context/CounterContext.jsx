import {createContext} from "react";
import {useState} from "react";

export const CounterContext = createContext(0);

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(5);
    return(
        <CounterContext.Provider value={{count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}