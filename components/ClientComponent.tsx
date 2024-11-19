"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";

export const ClientComponent = () => {
    const { setTheme } = useTheme();
    return (
        <>
            {/* <p>The current theme is: {theme}</p> */}
            {/* <h1 className="text-5xl font-extrabold tracking-tight leading-none">
                We invest in the world’s potential
            </h1> */}
            <Button type="button" onClick={() => setTheme("light")} className="capitalize">
                Light Mode
            </Button>
            <Button
                intent="secondary"
                onClick={() => setTheme("dark")}
                className="px-3 py-2 text-sm"
            >
                Dark Mode
            </Button>
            <Button onClick={() => setTheme("system")}>Add to cart</Button>
        </>
    );
};
