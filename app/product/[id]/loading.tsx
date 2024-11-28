import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SkeletonProductDetail from "@/components/skeleton-product-detail";
import { getIronSessionData } from "@/libs/session";

export default async function LoadingProductDetail() {
    const session = await getIronSessionData();
    return (
        <>
            <Navbar isLoggedIn={session.isLoggedIn} token={session.token} />
            <div className="max-w-screen-lg mx-auto">
                <SkeletonProductDetail />;
            </div>
            <Footer />
        </>
    );
}
