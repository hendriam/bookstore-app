import BannerCategory from "@/components/banner-category";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductBestSeller from "@/components/product-bestseller";
import ProductNew from "@/components/product-new";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-lg mx-auto">
                <Hero />
                <BannerCategory />
                <ProductNew />
                <ProductBestSeller />
            </div>
            <Footer />
        </>
    );
}
