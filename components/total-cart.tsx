"use client";

import { fetchAllCart } from "@/api/api-cart";
import { useEffect, useState } from "react";

const TotalCart = () => {
    const [cart, setCart] = useState(0);

    useEffect(() => {
        async function fetchCart() {
            const res = await fetchAllCart();
            setCart(res);
        }
        fetchCart();
    }, []);
    return <p className="text-xl">{cart}</p>;
};

export default TotalCart;
