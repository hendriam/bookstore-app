import React from "react";
import CardImage from "./card-image";
import CardTitle from "./card-title";
import CardStar from "./card-star";
import CardFooter from "./card-footer";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: any;
    tags: any;
    stock: number;
}

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <CardImage id={product._id} srcImg={product.image} altImg={product.name} />
            <div className="px-5 pb-5">
                <CardTitle id={product._id} title={product.name} />
                <CardStar />
                <CardFooter price={product.price} productId={product._id} />
            </div>
        </div>
    );
};

export default Card;
