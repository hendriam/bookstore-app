"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const ProductPaginationList = ({ page, currentPage }: { page: number; currentPage: number }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleOnclickPage(page: number) {
        const params = new URLSearchParams(searchParams);
        if (page) {
            params.set("page", page.toString());
        } else {
            params.delete("page");
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    const styleList = `flex items-center justify-center px-4 h-10 leading-tight`;
    return (
        <>
            <li key={page}>
                <button
                    disabled={page === currentPage ? true : false}
                    className={
                        styleList +
                        (page === currentPage
                            ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white")
                    }
                    onClick={() => {
                        handleOnclickPage(page);
                    }}
                >
                    {page}
                </button>
            </li>
        </>
    );
};

export default ProductPaginationList;
