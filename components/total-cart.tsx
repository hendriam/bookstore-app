"use client";

import { useCart } from "@/context/CartContext";

const TotalCart = () => {
    const { cart } = useCart();
    return <p className="text-xl">{cart}</p>;
};

export default TotalCart;
