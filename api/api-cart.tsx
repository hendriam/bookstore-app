// interface ResponseGetAllCart {
//     code: number
//     message: string
// }

export const fetchAllCart = async (token: string): Promise<number> => {
    const options = {
        headers: {
            Authorization: "Bearer " + token,
        },
    }

    const url = `http://localhost:3000/api/v1/carts`
    const res = await fetch(url, options)
    if (!res.ok) {
        // throw new Error("Failed to fetch data")
        return 0
    }
    const result = await res.json()
    return result.data.totalQuantity
}
