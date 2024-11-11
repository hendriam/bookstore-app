'use server';

import { fetchDataProduct } from '@/libs/apiGetProducts';
import ProductCard from './ProductCard';

const ProductRow = async ({ search, }) => {
    const fetchedData = await fetchDataProduct(search);
    let products = fetchedData.data.products;

    let rows = [];

    products.forEach((product) => {
        rows.push(<ProductCard product={product} key={product._id} />);
    });
    return <div className="grid grid-cols-4 justify-around gap-3">{rows}</div>;
};

export default ProductRow;
