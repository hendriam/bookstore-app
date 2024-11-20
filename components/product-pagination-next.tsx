"use client";

import Next from "./icon/next";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const ProductPaginationNext = ({
    currentPage,
    totalPages,
}: {
    currentPage: number;
    totalPages: number;
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleOnclickNextPage(currentPage: number) {
        const params = new URLSearchParams(searchParams);
        const page = currentPage + 1;
        if (currentPage) {
            params.set("page", page.toString());
        } else {
            params.delete("page");
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    const disabled: boolean = totalPages == currentPage ? true : false;

    return (
        <li key="NextPage">
            <button
                onClick={() => {
                    handleOnclickNextPage(currentPage);
                }}
                disabled={disabled}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <span className="sr-only">Next</span>
                <Next />
            </button>
        </li>
    );
};

export default ProductPaginationNext;
