"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import SearchIcon from "./icon/search";

const ProductSearch = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    function handleSearch(formData: { get: (search: string) => any }) {
        const params = new URLSearchParams(searchParams);
        const search = formData.get("search");
        params.delete("page");
        if (search) {
            params.set("search", search);
        } else {
            params.delete("search");
        }
        pathname === "/"
            ? replace(`/product/${pathname}?${params.toString()}`, { scroll: false })
            : replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <form action={handleSearch} className="w-full">
            <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <button
                    type="submit"
                    className="absolute inset-y-0 start-0 flex items-center ps-3 "
                >
                    <SearchIcon />
                </button>
                <input
                    type="search"
                    key={searchParams?.get("search")}
                    defaultValue={searchParams.get("search")?.toString()}
                    name="search"
                    id="search"
                    itemID="search"
                    className="block w-full px-4 py-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                />
            </div>
        </form>
    );
};

export default ProductSearch;
