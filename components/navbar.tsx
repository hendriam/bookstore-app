"use client";

import Logo from "./logo";
import NavToggle from "./toggle";
import NavbarMenu from "./navbar-menu";
import NavbarSearch from "./navbar-search";
import NavbarMobile from "./navbar-mobile";
import { createContext, useEffect, useRef, useState } from "react";
import { SessionData } from "@/libs/session";

export const SessionContext = createContext<SessionData | undefined>(undefined);

const Navbar = (session: SessionData) => {
    const [isToggled, setToggled] = useState<boolean>(false);
    const handleToggleBar = () => setToggled(!isToggled);
    let menuRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     let handler = (e: any) => {
    //         if (!menuRef.current?.contains(e.target)) {
    //             setToggled(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handler);
    //     return () => {
    //         document.removeEventListener("mousedown", handler);
    //     };
    // });

    let hidden = isToggled ? "flex" : "hidden";

    return (
        <SessionContext.Provider value={session}>
            <nav className="border-b border-gray-200 dark:border-gray-600 dark:bg-background ">
                <div className="max-w-screen-lg flex justify-between mx-auto py-4">
                    <Logo />
                    <NavbarSearch />
                    <NavbarMenu />
                    <NavToggle onClickHandler={handleToggleBar} />
                </div>
                <NavbarMobile hidden={hidden} menuRef={menuRef} />
            </nav>
        </SessionContext.Provider>
    );
};

export default Navbar;
