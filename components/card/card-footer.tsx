"use client";

import { useState } from "react";
import { Button } from "../button";
import { ResponseAddToCart, addToCart } from "@/api/api-cart";
import { useCart } from "@/context/CartContext";

const CardFooter = ({ price, productId }: { price: number; productId: string }) => {
    const [message, setMessage] = useState<string | undefined>("");
    const [isFailed, setIsFailed] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const { updateCart } = useCart();

    const handleAddToCart = async (formData: FormData) => {
        setIsPending(true);
        setIsFailed(false);
        setMessage("");
        const response = await addToCart(formData);
        setIsFailed(response?.isFailed);
        setMessage(response.message);
        if (!response?.isFailed) {
            setIsFailed(false);
            setMessage("");
            updateCart(response?.data.totalQuantity);
        }
        setIsPending(false);
    };
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
                <form action={handleAddToCart}>
                    <input type="hidden" name="productId" defaultValue={productId} />
                    <input type="hidden" name="quantity" defaultValue={1} />
                    <Button type="submit" disabled={isPending}>
                        {isPending ? "Loading..." : "Add to cart"}
                    </Button>
                </form>
            </div>
            {!isFailed ? (
                ""
            ) : (
                <p className="flex flex-col text-xs font-semibold italic text-red-500 list-disc list-inside dark:text-red-600">
                    {message}
                </p>
            )}
        </div>
    );
};

export default CardFooter;
function formAction(formData: FormData): ResponseAddToCart {
    throw new Error("Function not implemented.");
}
