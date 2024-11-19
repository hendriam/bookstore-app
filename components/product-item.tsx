"use server";

import { fetchDataProduct } from "@/api/api-get-products";
import Card from "./card";
import ProductPagination from "./product-pagination";

// Base on name this type is flag used to fetch data
enum TypeFetch {
    New = "New", // this flag used to fetch the new of products
    BestSeller = "BestSeller", // this flag used to fetch the bestseller products
    All = "All", // this flag used to fetch the all of products
}

const ProductItem = async ({
    search,
    page,
    limit,
    typeFetch,
}: {
    search: string;
    page: number;
    limit: number;
    typeFetch: TypeFetch;
}) => {
    const fetchedData = await fetchDataProduct(search, page, limit, typeFetch);

    const products = fetchedData.data.products;
    const totalData = fetchedData.data.total;
    const totalPages = fetchedData.data.totalPages;
    const currentPage = fetchedData.data.currentPage;

    if (typeFetch == "All") {
        return (
            <div className="flex flex-col space-y-4">
                <div key={totalData} className="grid grid-cols-4 justify-around gap-3">
                    {products.map((product: any) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
                <ProductPagination totalPages={totalPages} currentPage={currentPage} />
            </div>
        );
    } else {
        return (
            <div className="flex flex-col space-y-4">
                <div key={totalData} className="grid grid-cols-4 justify-around gap-3">
                    {products.map((product: any) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        );
    }
};

export default ProductItem;
