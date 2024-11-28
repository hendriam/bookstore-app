interface Response {
    message: string;
    data: {
        products: Product; // Sesuaikan dengan struktur produk
        currentPage: number;
        totalPages: number;
        total: number;
    };
}

interface ResponseById {
    message: string;
    data: Product;
}

interface Product {
    [x: string]: any;
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: any;
    tags: any;
    stock: number;
}

// Base on name this type is flag used to fetch data
enum TypeFetch {
    New = "New", // this flag used to fetch the new of products
    BestSeller = "BestSeller", // this flag used to fetch the bestseller products
    All = "All", // this flag used to fetch the all of products
}

export const fetchDataProduct = async (
    search: string,
    page: number,
    limit: number,
    typeFetch?: TypeFetch
): Promise<Response> => {
    let url = `http://localhost:3000/api/v1/products?page=${page}&limit=${limit}&search=${search}`;
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export const fetchDataProductById = async (id: string): Promise<ResponseById> => {
    let url = `http://localhost:3000/api/v1/products/${id}`;
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
