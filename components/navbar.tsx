import { Button } from "./button";
import Cart from "./icon/cart";
import Logo from "./logo";
import ProductSearch from "./product-search";
import SwitcherMode from "./switcher-mode";
import NavToggle from "./toggle";

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 dark:border-gray-600 dark:bg-background ">
            <div className="max-w-screen-lg flex justify-between items-center mx-auto py-4">
                <Logo />
                <div className="hidden w-2/5 md:flex items-center space-x-1">
                    <ProductSearch />
                    <Cart />
                </div>
                <div className="hidden md:flex space-x-1">
                    <Button type="button" intent="secondary">
                        Login
                    </Button>
                    <Button type="button">Sign up</Button>
                    <div className="border-r border-gray-200 dark:border-gray-600 "></div>
                    {/* <IconMode /> */}
                    <SwitcherMode />
                </div>
                <NavToggle />
            </div>
            <div className="md:hidden flex flex-col space-y-2 mb-2">
                <ProductSearch />
                <div className="bg-gray-200 dark:bg-gray-700 flex flex-col space-y-2 p-3 rounded-lg">
                    <Button type="button" intent="secondary" className="bg-gray-50">
                        Login
                    </Button>
                    <Button type="button">Sign up</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
