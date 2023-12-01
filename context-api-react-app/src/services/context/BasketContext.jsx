import { createContext, useEffect, useState } from "react"

export const BasketContext = createContext("");
let basketString = localStorage.getItem('context-app-basket');

const BasketContextProvider = ({ children }) => {
    let [basket, setBasket] = useState([]);

    useEffect(() => {
        async function renewBasket(){
            await setBasket(JSON.parse(basketString));
        }
        if (basketString != null) {
            renewBasket();
        }
    }, []);



    return <BasketContext.Provider value={{ basket, setBasket }}>
        {children}
    </BasketContext.Provider>
}

export default BasketContextProvider