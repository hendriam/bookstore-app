import { Button } from "../button";

const CardFooter = ({ price }: { price: number }) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
            <Button>Add to cart</Button>
        </div>
    );
};

export default CardFooter;
