import ProductItem from "./product-item";
import ProductLimit from "./product-limit";

// Base on name this type is flag used to fetch data
enum TypeFetch {
    New = "New", // this flag used to fetch the new of products
    BestSeller = "BestSeller", // this flag used to fetch the bestseller products
    All = "All", // this flag used to fetch the all of products
}

const Products = ({ search, page, limit }: { search: string; page: number; limit: number }) => {
    return (
        <div className="grid grid-cols-1 mt-10">
            <div className="flex flex-col space-y-2">
                <div className="grid grid-cols-2 justify-between items-center">
                    <ProductLimit />
                </div>
                <ProductItem search={search} page={page} limit={limit} typeFetch={TypeFetch.All} />
            </div>
        </div>
    );
};

export default Products;
