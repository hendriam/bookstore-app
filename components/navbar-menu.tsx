import SwitcherMode from "./switcher-mode";
import NavbarMenuAuth from "./navbar-menu-auth";
import NavbarMenuProfile from "./navbar-menu-profile";
import { useContext } from "react";
import { SessionContext } from "./navbar";

const NavbarMenu = () => {
    const session = useContext(SessionContext);

    return (
        <div className="hidden md:flex items-center space-x-1">
            {session?.isLoggedIn ? (
                <NavbarMenuProfile token={session?.token} />
            ) : (
                <NavbarMenuAuth />
            )}
            <SwitcherMode />
        </div>
    );
};

export default NavbarMenu;
