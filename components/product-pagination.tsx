import ProductPaginationList from "./product-pagination-list";
import ProductPaginationNext from "./product-pagination-next";
import ProductPaginationPrevious from "./product-pagination-previous";

const ProductPagination = ({
    totalPages,
    currentPage,
}: {
    totalPages: number;
    currentPage: number;
}) => {
    let pages = [];
    for (let index = 1; index <= totalPages; index++) {
        pages.push(<ProductPaginationList key={index} page={index} currentPage={currentPage} />);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <ProductPaginationPrevious currentPage={currentPage} />
                {pages}
                <ProductPaginationNext currentPage={currentPage} totalPages={totalPages} />
            </ul>
        </nav>
    );
};

export default ProductPagination;
