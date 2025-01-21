"use server";

// interface ResponseGetAllCart {
//     code: number
//     message: string
// }

import { getIronSessionData } from "@/libs/session";

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
