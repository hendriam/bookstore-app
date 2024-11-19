"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const ProductLimit = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleLimit(limit: string) {
        const params = new URLSearchParams(searchParams);
        params.delete("page");
        if (limit) {
            params.set("limit", limit);
        } else {
            params.delete("limit");
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="h-full">
            <form className="w-full flex items-center space-x-3">
                <select
                    onChange={(e) => {
                        handleLimit(e.target.value);
                    }}
                    key={searchParams?.get("limit")}
                    defaultValue={searchParams.get("limit")?.toString()}
                    id="limit"
                    name="limit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label htmlFor="limit">entries per page</label>
            </form>
        </div>
    );
};

export default ProductLimit;
