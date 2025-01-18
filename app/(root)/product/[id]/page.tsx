import { fetchDataProductById } from "@/api/api-get-products";
import { Button } from "@/components/button";
import Footer from "@/components/footer";
import Heart from "@/components/icon/heart";
import Navbar from "@/components/navbar";
import { getIronSessionData } from "@/libs/session";
import Image from "next/image";
import { Suspense } from "react";
import LoadingProductDetail from "./loading";

const DetailProduct = async ({ params }: { params: Promise<{ id: string }> }) => {
    const session = await getIronSessionData();
    const id = (await params).id;
    const product = await fetchDataProductById(id);
    return (
        <>
            <Navbar isLoggedIn={session.isLoggedIn} token={session.token} />
            <div className="max-w-screen-lg mx-auto">
                <Suspense fallback={<LoadingProductDetail />}>
                    <div className="flex space-x-10">
                        <Image
                            src={"http://localhost:3000/api/v1/" + product.data.image}
                            width={350}
                            height={350}
                            alt={product.data.name}
                        />
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-md text-pretty font-semibold  text-gray-500 dark:text-gray-400">
                                    Author name
                                </p>
                                <h2 className="text-4xl text-pretty font-semibold text-gray-700 dark:text-white">
                                    {product.data.name}
                                </h2>
                                <h3 className="mt-5 text-3xl text-pretty font-semibold  text-gray-900 dark:text-gray-200">
                                    $ {product.data.price}
                                </h3>
                                <h5 className="mt-5 text-md font-bold text-gray-800 dark:text-gray-400">
                                    Deskripsi:
                                </h5>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                                    {product.data.description}
                                </p>
                                <div className="mt-5">
                                    {product.data.tags.map((tag: any) => (
                                        <span
                                            key={tag._id}
                                            className="bg-gray-100 text-gray-800 text-xs font-semibold italic me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button>Add to cart</Button>
                                <Button intent="secondary">
                                    <Heart />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
            <Footer />
        </>
    );
};

export default DetailProduct;
