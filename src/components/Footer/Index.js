import { Divider } from '@nextui-org/react';
import Navbrand from '../Header/Navbrand';
import NavItem from '../Header/NavItem';

const Footer = () => {
    return (
        <div className="flex flex-col space-y-5 py-10">
            <div className="flex justify-between">
                <Navbrand />
                <NavItem />
            </div>
            <Divider />
            <h1 className="text-center">© 2024 ACME STORE. All Rights Reserved.</h1>
        </div>
    );
};

export default Footer;
