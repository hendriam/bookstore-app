import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900 mt-4">
            <div className="w-full max-w-screen-lg mx-auto py-4 md:py-8">
                <div className="flex items-center justify-between">
                    <Logo />
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link
                                href="/about"
                                rel="about my store"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto lg:my-8 border-gray-200 dark:border-gray-700" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <Link href="/" rel="my store" className="hover:underline">
                        Mystore{" "}
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
