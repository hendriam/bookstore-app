import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';
import Navbrand from './Navbrand';
import NavItem from './NavItem';
import Cart from '../Icons/Cart';
import NavToggle from './NavToggle';
import InputSearch from './InputSearch';

export const Nav = () => {
    return (
        <>
            <nav className="border-gray-200 flex justify-between space-x-14 dark:bg-gray-900">
                <Navbrand />
                <div className="hidden w-auto md:flex md:w-full items-center justify-between py-4">
                    <NavItem />
                    {/* <InputSearch /> */}
                    <div className="flex items-center space-x-3">
                        <Cart />
                        <Link href="/login">
                            <Button color="primary" radius="sm" className="h-9 min-w-18">
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
                <NavToggle />
            </nav>
            <Divider />
        </>
    );
};
