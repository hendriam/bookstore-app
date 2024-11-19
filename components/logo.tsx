import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" rel="my store" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
                src="https://flowbite.com/docs/images/logo.svg"
                width={32}
                height={32}
                alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Mystore
            </span>
        </Link>
    );
};

export default Logo;
