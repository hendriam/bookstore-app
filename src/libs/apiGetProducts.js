export const fetchDataProduct = async (search, page, limit) => {
    let url = `http://localhost:3000/api/v1/products?page=${page}&limit=${limit}&search=${search}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};
