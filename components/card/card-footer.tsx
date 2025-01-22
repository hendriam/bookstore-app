"use client";

import { useActionState } from "react";
import { Button } from "../button";
import { addToCart } from "@/api/api-cart";

const CardFooter = ({ price, productId }: { price: number; productId: string }) => {
    const [state, formAction, isPending] = useActionState(addToCart, {
        isFailed: false,
        message: "",
    });
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
                <form action={formAction}>
                    <input type="hidden" name="productId" defaultValue={productId} />
                    <input type="hidden" name="quantity" defaultValue={1} />
                    <Button type="submit">{isPending ? "Loading..." : "Add to cart"}</Button>
                </form>
            </div>
            {isPending ? (
                ""
            ) : (
                <p className="flex flex-col text-xs font-semibold italic text-red-500 list-disc list-inside dark:text-red-600">
                    {state?.isFailed ? state?.message : ""}
                </p>
            )}
        </div>
    );
};

export default CardFooter;
