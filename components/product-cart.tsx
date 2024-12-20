import Cart from "./icon/cart"
import TotalCart from "./total-cart"

const ProductCart = ({
    isLoggedIn,
    token,
}: {
    isLoggedIn: boolean | false
    token: string | ""
}) => {
    return (
        <div className="flex items-center space-x-1 cursor-pointer text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Cart />
            <TotalCart isLoggedIn={isLoggedIn} token={token} />
        </div>
    )
}

export default ProductCart
