import { Button } from "./button";
import Bar from "./icon/bar";

const NavToggle = () => {
    return (
        <Button type="button" intent="secondary" className="md:hidden block hover:text-foreground">
            <span className="sr-only">Open main menu</span>
            <Bar />
        </Button>
    );
};

export default NavToggle;
