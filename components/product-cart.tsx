import { useContext } from "react";
import Cart from "./icon/cart";
import TotalCart from "./total-cart";
import { SessionContext } from "./navbar";

const ProductCart = () => {
    const session = useContext(SessionContext);
    return (
        <div className="flex items-center space-x-1 cursor-pointer text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Cart />
            {session?.isLoggedIn ? <TotalCart /> : 0}
        </div>
    );
};

export default ProductCart;
