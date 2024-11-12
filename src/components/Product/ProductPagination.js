'use client';

import { Pagination } from '@nextui-org/react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

const ProductPagination = ({ currentPage, totalPages }) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleOnchange(page) {
        const params = new URLSearchParams(searchParams);
        if (page) {
            params.set('page', page);
        } else {
            params.delete('page');
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <Pagination
            onChange={(page) => {
                handleOnchange(page);
            }}
            showControls
            total={totalPages}
            page={currentPage}
        />
    );
};

export default ProductPagination;
