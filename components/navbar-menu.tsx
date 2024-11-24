import SwitcherMode from "./switcher-mode";
import NavbarMenuAuth from "./navbar-menu-auth";
import NavbarMenuProfile from "./navbar-menu-profile";

const NavbarMenu = ({ isLoggedIn, token }: { isLoggedIn: boolean; token: string }) => {
    return (
        <div className="hidden md:flex items-center space-x-1">
            {isLoggedIn ? <NavbarMenuProfile token={token} /> : <NavbarMenuAuth />}
            <SwitcherMode />
        </div>
    );
};

export default NavbarMenu;
