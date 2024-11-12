'use server';

import { fetchDataProduct } from '@/libs/apiGetProducts';
import ProductCard from './ProductCard';
import ProductPagination from './ProductPagination';

const ProductRow = async ({ search, page, limit }) => {
    const fetchedData = await fetchDataProduct(search, page, limit);
    let products = fetchedData.data.products;

    let rows = [];

    products.forEach((product) => {
        rows.push(<ProductCard product={product} key={product._id} />);
    });

    return (
        <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-4 justify-around gap-3">{rows}</div>
            <ProductPagination
                currentPage={fetchedData.data.currentPage}
                totalPages={fetchedData.data.totalPages}
            />
        </div>
    );
};

export default ProductRow;
