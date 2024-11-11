import Category from '@/components/Category';
import Footer from '@/components/Footer/Index';
import { Nav } from '@/components/Header/Nav';
import Hero from '@/components/Hero/Index';
import Product from '@/components/Product/Index';
import ProductRow from '@/components/Product/ProductRow';

const ProductPage = async (props) => {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || null;
    return (
        <>
            <Nav />
            <Product search={search} />
            <Footer />
        </>
    );
};

export default ProductPage;
