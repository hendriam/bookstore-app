"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import Moon from "./icon/moon";
import Sun from "./icon/sun";

const SwitcherMode = () => {
    const [isDroped, setDroped] = useState<boolean>(false);
    const { setTheme } = useTheme();
    let menuRef = useRef<HTMLDivElement>(null);

    function handleDarkMode() {
        setTheme("dark");
        setDroped(false);
    }

    function handleLightMode() {
        setTheme("light");
        setDroped(false);
    }

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

    const hidden = isDroped ? "block" : "hidden";

    return (
        <div ref={menuRef}>
            <Button
                intent="secondary"
                type="button"
                className="px-1 relative"
                onClick={() => setDroped(!isDroped)}
            >
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </Button>

            <div
                className={`z-10 ${hidden} mt-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-60`}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <button
                            type="button"
                            onClick={handleLightMode}
                            className="px-2 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Light
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={handleDarkMode}
                            className="px-2 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dark
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SwitcherMode;
