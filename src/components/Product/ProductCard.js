import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductStar from './ProductStar';
import ProductPrice from './ProductPrice';
import ButtonSM from '../ButtonSM';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ProductImage srcImg={product.image} altImg={product.name} />
            <div className="px-5 pb-5">
                <ProductName>{product.name}</ProductName>
                <ProductStar />
                <div className="flex items-center justify-between">
                    <ProductPrice>{product.price}</ProductPrice>
                    <ButtonSM>Add to Cart</ButtonSM>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
