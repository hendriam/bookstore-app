import Category from '@/components/Category';
import Footer from '@/components/Footer/Index';
import { Nav } from '@/components/Header/Nav';
import Hero from '@/components/Hero/Index';
import Product from '@/components/Product/Index';

export default async function Home(props) {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || '';
    const page = searchParams?.page || 1;
    const limit = searchParams?.limit || 12;
    return (
        <>
            <Nav />
            <Hero />
            <Category />
            <Product search={search} page={page} limit={limit} />
            <Footer />
        </>
    );
}
