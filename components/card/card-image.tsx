import Image from "next/image";

const CardImage = ({ ...props }) => {
    return (
        <a href="#">
            <Image
                className="p-5 rounded-t-lg"
                src={"http://localhost:3000/api/v1/" + props.srcImg}
                width={240}
                height={200}
                alt={props.altImg}
            />
        </a>
    );
};
export default CardImage;
