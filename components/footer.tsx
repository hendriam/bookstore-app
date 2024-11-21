import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900 mt-4">
            <div className="w-full max-w-screen-lg mx-auto py-4 md:py-8">
                <div className="flex justify-between items-center">
                    <Logo />
                    <ul className="flex text-sm hover:text-blue-700 dark:hover:text-gray-300 hover:underline">
                        <li>
                            <Link href="/about" rel="about my store" className="">
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
