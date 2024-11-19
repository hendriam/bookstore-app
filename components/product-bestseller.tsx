import Link from "next/link";
import ProductItem from "./product-item";

// Base on name this type is flag used to fetch data
enum TypeFetch {
    New = "New", // this flag used to fetch the new of products
    BestSeller = "BestSeller", // this flag used to fetch the bestseller products
    All = "All", // this flag used to fetch the all of products
}

const ProductBestSeller = () => {
    return (
        <div className="grid grid-cols-1 mt-10">
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg">Best Seller</h2>
                    <Link href="/product" rel="product page" className="hover:underline">
                        <h2 className="text-lg">See All Products</h2>
                    </Link>
                </div>
                <ProductItem search="" page={1} limit={4} typeFetch={TypeFetch.BestSeller} />
            </div>
        </div>
    );
};

export default ProductBestSeller;
