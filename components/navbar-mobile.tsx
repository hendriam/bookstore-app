import { RefObject } from "react";
import ProductSearch from "./product-search";
import { Button } from "./button";

const NavbarMobile = ({
    hidden,
    menuRef,
}: {
    hidden: string;
    menuRef: RefObject<HTMLDivElement>;
}) => {
    return (
        <div className={`${hidden} flex-col space-y-2 mb-2`} ref={menuRef}>
            <ProductSearch />
            <div className="bg-gray-200 dark:bg-gray-700 flex flex-col space-y-2 p-3 rounded-lg">
                <Button type="button" intent="secondary" className="bg-gray-50">
                    Login
                </Button>
                <Button type="button">Sign up</Button>
            </div>
        </div>
    );
};

export default NavbarMobile;
