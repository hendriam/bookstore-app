import Image from "next/image";
import banner1 from "/public/images/banner1.jpeg";
import banner2 from "/public/images/banner2.png";
import banner3 from "/public/images/banner3.jpg";

const Hero = () => {
    return (
        <div className="h-auto w-full mt-5 flex gap-3">
            <div className="">
                <Image
                    priority
                    className="rounded-lg"
                    src={banner1}
                    width={"100%"}
                    height={"100%"}
                    alt="banner 1"
                />
            </div>
            <div className="flex flex-col gap-3">
                <Image
                    className="rounded-lg"
                    src={banner3}
                    width={"100%"}
                    height={"100%"}
                    alt="banner 2"
                />
                <Image
                    className="rounded-lg grow"
                    src={banner2}
                    width={"100%"}
                    height={"100%"}
                    alt="banner 3"
                />
            </div>
        </div>
    );
};

export default Hero;
