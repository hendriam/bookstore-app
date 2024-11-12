import InputSearch from '../Header/InputSearch';
import ProductLimit from './ProductLimit';
import ProductRow from './ProductRow';

const Product = ({ search, page, limit }) => {
    return (
        <div className="grid grid-cols-1 mt-10">
            <div className="flex flex-col space-y-2">
                <div className="grid grid-cols-2 justify-between items-center">
                    <ProductLimit />
                    <InputSearch />
                </div>
                <ProductRow search={search} page={page} limit={limit} />
            </div>
        </div>
    );
};

export default Product;
