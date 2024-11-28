import Image from "next/image";
import Link from "next/link";

const CardImage = ({ ...props }) => {
    return (
        <Link href={"product/" + props.id}>
            <Image
                className="p-5 rounded-t-lg"
                src={"http://localhost:3000/api/v1/" + props.srcImg}
                width={240}
                height={200}
                alt={props.altImg}
            />
        </Link>
    );
};
export default CardImage;
