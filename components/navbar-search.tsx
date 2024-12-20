import ProductCart from "./product-cart"
import ProductSearch from "./product-search"

const NavbarSearch = ({
    isLoggedIn,
    token,
}: {
    isLoggedIn: boolean | false
    token: string | ""
}) => {
    return (
        <div className="hidden w-2/5 md:flex items-center space-x-1">
            <ProductSearch />
            <ProductCart isLoggedIn={isLoggedIn} token={token} />
        </div>
    )
}

export default NavbarSearch
