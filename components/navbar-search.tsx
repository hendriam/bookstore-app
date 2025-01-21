import ProductCart from "./product-cart";
import ProductSearch from "./product-search";

const NavbarSearch = () => {
    return (
        <div className="hidden w-2/5 md:flex items-center space-x-1">
            <ProductSearch />
            <ProductCart />
        </div>
    );
};

export default NavbarSearch;
