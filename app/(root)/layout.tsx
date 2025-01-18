import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getIronSessionData } from "@/libs/session";

export default async function BaseLayout({ children }: { children: React.ReactNode }) {
    const session = await getIronSessionData();
    return (
        <>
            <Navbar isLoggedIn={session.isLoggedIn} token={session.token} />
            {children}
            <Footer />
        </>
    );
}
