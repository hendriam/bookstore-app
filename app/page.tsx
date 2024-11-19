import BannerCategory from "@/components/banner-category";
import Hero from "@/components/hero";
import ProductBestSeller from "@/components/product-bestseller";
import ProductNew from "@/components/product-new";

export default function Home() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Hero />
            <BannerCategory />
            <ProductNew />
            <ProductBestSeller />
        </div>
    );
}
