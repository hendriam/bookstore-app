"use client";

import { useTheme } from "next-themes";

export const ClientComponent = () => {
    const { setTheme } = useTheme();
    return (
        <>
            {/* <p>The current theme is: {theme}</p> */}
            <h1>Home Page </h1>
            <button onClick={() => setTheme("light")}>Light Mode</button>
            <button onClick={() => setTheme("dark")}>Dark Mode</button>
            <button onClick={() => setTheme("system")}>system Mode</button>
        </>
    );
};
