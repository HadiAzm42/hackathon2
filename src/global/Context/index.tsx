"use client"

import {ReactNode, createContext, useEffect, useReducer} from "react"
import { cartReducer } from "../Reducer";

export const cartContext = createContext<any>(null);

const ContextWrapper = ({children}: {children:ReactNode}) => {

    const initializerOfCart = {
        cart:[
            {
                productId: "",
                quantity: 2,
            }
        ],
    } 

    const [state, dispatch] = useReducer(cartReducer, initializerOfCart)
useEffect(() => {
    let cart = localStorage.getItem("cart") as string;

    if (cart === null) {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }else {
        initializerOfCart.cart = JSON.parse(cart);
    }
})

useEffect(() => {
    localStorage.setItem("cart", state.cart)
}, [state.cart])

    return (
        <cartContext.Provider value={{state, dispatch}}>
            {children}
        </cartContext.Provider>
    )
}
export default ContextWrapper