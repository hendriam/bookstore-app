import Image from "next/image";
import profile from "/public/images/profile.jpg";
import React, { useEffect, useRef, useState } from "react";
import { Claims } from "@/libs/session";
import { decodeJwt, jwtDecrypt } from "jose";
import FormSignOut from "./auth/form-sign-out";

const NavbarMenuProfile = ({ token }: { token: string }) => {
    const [isDroped, setDroped] = useState<boolean>(false);
    let menuRef = useRef<HTMLDivElement>(null);
    const claims: Claims = decodeJwt(token);

    useEffect(() => {
        let handler = (e: any) => {
            if (!menuRef.current?.contains(e.target)) {
                setDroped(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    let hidden = isDroped ? "absolute" : "hidden";

    return (
        <div className="relative top-1" ref={menuRef}>
            <button type="button" onClick={() => setDroped(!isDroped)}>
                <Image src={profile} alt="profile" className="w-11 h-11 rounded-full" />
            </button>
            {/* Dropdown menu */}
            <div
                className={`z-10 ${hidden} right-0 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-600`}
            >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{claims.name}</div>
                    <div className="font-medium truncate">{claims.email}</div>
                </div>
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Settings
                        </a>
                    </li>
                </ul>
                <div className="py-1">
                    <FormSignOut />
                </div>
            </div>
        </div>
    );
};

export default NavbarMenuProfile;
