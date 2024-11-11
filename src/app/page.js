import Category from '@/components/Category';
import Footer from '@/components/Footer/Index';
import { Nav } from '@/components/Header/Nav';
import Hero from '@/components/Hero/Index';
import Product from '@/components/Product/Index';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Category />
            <Product search={null} />
            <Footer />
        </>
    );
}
