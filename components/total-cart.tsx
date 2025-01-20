"use client";

import { fetchAllCart } from "@/api/api-cart";
import { useEffect, useState } from "react";

const TotalCart = ({ isLoggedIn, token }: { isLoggedIn: boolean | false; token: string | "" }) => {
    const [cart, setCart] = useState(0);
    if (isLoggedIn) {
        useEffect(() => {
            async function fetchCart() {
                const res = await fetchAllCart(token);
                setCart(res);
            }
            fetchCart();
        }, []);
    } else {
        setCart(0);
    }

    return <p className="text-xl">{cart}</p>;
};

export default TotalCart;
