import { createContext, useState } from "react";

const BasketContext = createContext(null);

export const BasketProvider = ({children}) => {

    const [basket, setBasket] = useState([]);

    const values = {
        basket,
        setBasket
    }

    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>

}

export default BasketContext
