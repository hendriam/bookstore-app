"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { Sun } from "./icon/sun";
import { Moon } from "./icon/moon";
import { DotsVertical } from "./icon/dots-vertical";

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

    let hidden = isDroped ? "block" : "hidden";

    return (
        <div ref={menuRef}>
            <Button
                intent="secondary"
                type="button"
                size="tg"
                className="relative"
                onClick={() => setDroped(!isDroped)}
            >
                <DotsVertical />
            </Button>

            <div
                className={`z-10 ${hidden} mt-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-md  dark:bg-gray-700 dark:divide-gray-60`}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <button
                            type="button"
                            onClick={handleLightMode}
                            className="w-full px-2 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <Sun />
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={handleDarkMode}
                            className="w-full px-2 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <Moon />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SwitcherMode;
