import Link from "next/link";

const CardTitle = ({ id, title }: { id: string; title: string }) => {
    return (
        <Link href={"product/" + id}>
            <h5 className="text-xl text-pretty font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
        </Link>
    );
};

export default CardTitle;
