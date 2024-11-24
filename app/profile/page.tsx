import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getIronSessionData } from "@/libs/session";

const Profile = async () => {
    const session = await getIronSessionData();

    return (
        <>
            <Navbar isLoggedIn={session.isLoggedIn} token={session.token} />
            <div className="max-w-screen-lg mx-auto">
                <h1>Profile page</h1>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
