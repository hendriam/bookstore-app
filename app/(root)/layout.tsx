import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/CartContext";
import { getIronSessionData } from "@/libs/session";
import { createContext, useState } from "react";

export default async function BaseLayout({ children }: { children: React.ReactNode }) {
    const session = await getIronSessionData();
    return (
        <CartProvider>
            <Navbar isLoggedIn={session.isLoggedIn} token={session.token} />
            {children}
            <Footer />
        </CartProvider>
    );
}
