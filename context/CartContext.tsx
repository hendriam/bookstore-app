"use client";

import { fetchAllCart } from "@/api/api-cart";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
    cart: number;
    updateCart: (newCart: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<number>(0);

    const updateCart = (newCart: number) => {
        setCart(newCart);
    };

    useEffect(() => {
        async function fetchCart() {
            const res = await fetchAllCart();
            setCart(res);
        }
        fetchCart();
    }, []);

    return <CartContext.Provider value={{ cart, updateCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
