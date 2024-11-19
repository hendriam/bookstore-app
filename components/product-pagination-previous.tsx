"use client";

import Previous from "./icon/previous";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const ProductPaginationPrevious = ({
    currentPage,
}: {
    currentPage: number;
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleOnclickPreviousPage(currentPage: number) {
        const params = new URLSearchParams(searchParams);
        const page = currentPage - 1;
        if (currentPage) {
            params.set("page", page.toString());
        } else {
            params.delete("page");
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    const disabled: boolean = currentPage == 1 ? true : false;

    return (
        <li>
            <button
                onClick={() => {
                    handleOnclickPreviousPage(currentPage);
                }}
                disabled={disabled}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <span className="sr-only">Previous</span>
                <Previous />
            </button>
        </li>
    );
};

export default ProductPaginationPrevious;
