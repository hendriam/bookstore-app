"use client";

import Link from "next/link";
import { Button } from "./button";
import Cart from "./icon/cart";
import Logo from "./logo";
import ProductSearch from "./product-search";
import SwitcherMode from "./switcher-mode";
import NavToggle from "./toggle";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isToggled, setToggled] = useState<boolean>(false);
    const router = useRouter();
    const handleToggleBar = () => setToggled(!isToggled);
    let menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (e: any) => {
            if (!menuRef.current?.contains(e.target)) {
                setToggled(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    let hidden = isToggled ? "flex" : "hidden";

    return (
        <nav className="border-b border-gray-200 dark:border-gray-600 dark:bg-background ">
            <div className="max-w-screen-lg flex justify-between mx-auto py-4">
                <Logo />
                <div className="hidden w-2/5 md:flex items-center space-x-1">
                    <ProductSearch />
                    <Cart />
                </div>
                <div className="hidden md:flex items-center space-x-3">
                    <Link
                        href="/login"
                        rel="login"
                        className=" hover:text-blue-700 hover:underline dark:hover:text-gray-300"
                    >
                        Login
                    </Link>
                    {/* <Link href="/signup" rel="sign up"> */}
                    <Button type="button" onClick={() => router.push("/signup")}>
                        Sign up
                    </Button>
                    {/* </Link> */}
                    <SwitcherMode />
                </div>
                <NavToggle onClickHandler={handleToggleBar} />
            </div>
            <div className={`${hidden} flex-col space-y-2 mb-2`} ref={menuRef}>
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
