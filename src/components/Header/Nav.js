import Link from 'next/link';
import Navbrand from './Navbrand';
import NavItem from './NavItem';
import Cart from '../Icons/Cart';
import NavToggle from './NavToggle';
import Button from '../ButtonSM';
import { Divider } from '@nextui-org/react';

export const Nav = () => {
    return (
        <>
            <nav className="border-gray-200 flex justify-between space-x-14 dark:bg-gray-900">
                <Navbrand />
                <div className="hidden w-auto md:flex md:w-full items-center justify-between py-4">
                    <NavItem />
                    <div className="flex items-center space-x-3">
                        <Cart />
                        <Link href="/login">
                            <Button>Login</Button>
                        </Link>
                    </div>
                </div>
                <NavToggle />
            </nav>
            <Divider />
        </>
    );
};
