export const fetchDataProduct = async (search) => {
    let url = `http://localhost:3000/api/v1/products?page=1&limit=12`;

    if (search != null) {
        url = `http://localhost:3000/api/v1/products?page=1&limit=12&search=${search}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};
