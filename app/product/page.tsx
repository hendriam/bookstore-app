import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Products from "@/components/products";

const Product = async (props: {
    searchParams?: Promise<{ search?: string; page?: number; limit?: number }>;
}) => {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || "";
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit || 5);

    return (
        <>
            <Navbar />
            <div className="max-w-screen-lg mx-auto">
                <Products search={search} page={page} limit={limit} />
            </div>
            <Footer />
        </>
    );
};

export default Product;
