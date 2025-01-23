"use server";

interface ResponseGetAllCart {
    code: number;
    message: string;
}

export interface ResponseAddToCart {
    isFailed: boolean | false;
    message?: string | "";
    data?: any;
}

import { getIronSessionData } from "@/libs/session";
import { redirect, useRouter } from "next/navigation";

export const fetchAllCart = async (): Promise<number> => {
    const session = await getIronSessionData();

    const options = {
        headers: {
            Authorization: "Bearer " + session.token,
        },
    };

    const url = `http://localhost:3000/api/v1/carts`;
    const res = await fetch(url, options);
    if (!res.ok) {
        // throw new Error("Failed to fetch data")
        return 0;
    }
    const result = await res.json();
    return result.data.totalQuantity;
};

export const addToCart = async (formData: FormData): Promise<ResponseAddToCart> => {
    const session = await getIronSessionData();
    if (!session?.isLoggedIn) {
        redirect("/login");
    }
    const options = {
        headers: {
            Authorization: "Bearer " + session.token,
        },
        method: "POST",
        body: new URLSearchParams({
            productId: formData.get("productId") as string,
            quantity: formData.get("quantity") as string,
        }),
    };
    const url = `http://localhost:3000/api/v1/carts`;
    const res = await fetch(url, options);

    if (!res.ok) {
        const err = await res.json();
        return { isFailed: true, message: err.message };
    }

    // redirect("/profile");
    const result = await res.json();
    return { isFailed: false, message: result.message, data: result.data };
};
