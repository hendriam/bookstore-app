'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = () => {
    const pathName = usePathname();
    return (
        <div className="flex items-center">
            <ul className="flex space-x-4 font-medium">
                <li>
                    <Link
                        href="/"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Category
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={`${
                            pathName === '/about'
                                ? 'block py-2 px-3 text-gray-900 rounded bg-gray-100 md:bg-transparent md:border-0 md:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:bg-gray-700 dark:text-white md:dark:hover:bg-transparent'
                                : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                        }`}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavItem;
