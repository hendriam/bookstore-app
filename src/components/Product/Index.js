import InputSearch from '../Header/InputSearch';
import ProductRow from './ProductRow';
import { Pagination } from '@nextui-org/react';

const Product = ({ search }) => {
    return (
        <div className="grid grid-cols-1 mt-10">
            <div className="flex flex-col space-y-2">
                <div className="grid grid-cols-2 justify-between items-center">
                    <div className="h-full">
                        <form className="w-full flex items-center space-x-3">
                            <select
                                id="limit"
                                name="limit"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                {/* <option selected>entries per page</option> */}
                                <option value="10">12</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <label htmlFor="limit">entries per page</label>
                        </form>
                    </div>
                    <InputSearch />
                </div>
                <ProductRow search={search} />
                <Pagination showControls total={10} initialPage={3} />
            </div>
        </div>
    );
};

export default Product;
