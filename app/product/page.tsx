import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import { getIronSessionData } from "@/libs/session";

const Product = async (props: {
    searchParams?: Promise<{ search?: string; page?: number; limit?: number }>;
}) => {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || "";
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit || 5);
    const session = await getIronSessionData();
    return (
        <>
            <Navbar isLoggedIn={session.isLoggedIn} token={session.token} />
            <div className="max-w-screen-lg mx-auto">
                <Products search={search} page={page} limit={limit} />
            </div>
            <Footer />
        </>
    );
};

export default Product;
