const ProductName = ({ children }) => {
    return (
        <a href="#">
            <h5 className="text-xl text-pretty font-semibold tracking-tight text-gray-900 dark:text-white">
                {children}
            </h5>
        </a>
    );
};

export default ProductName;
