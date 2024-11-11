import Link from "next/link";
import { AcmeLogo } from "./AcmeLogo";

const Navbrand = () => {
    return (
        <Link href="/" className="flex space-x-2 items-center">
            <AcmeLogo />

            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                ACME
            </span>
        </Link>
    );
};

export default Navbrand;
