import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./button";

const NavbarMenuAuth = () => {
    const router = useRouter();
    return (
        <div>
            <Link
                href="/login"
                rel="login"
                className=" hover:text-blue-700 hover:underline dark:hover:text-gray-300 "
            >
                Login
                <span className="pr-2"></span>
            </Link>
            <Button type="button" onClick={() => router.push("/signup")}>
                Sign up
            </Button>
        </div>
    );
};

export default NavbarMenuAuth;
