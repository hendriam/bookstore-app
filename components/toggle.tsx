import { Button } from "./button";
import Bar from "./icon/bar";
import SwitcherMode from "./switcher-mode";

interface ToggleProps {
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavToggle = (props: ToggleProps) => {
    return (
        <div className="md:hidden flex space-x-2">
            <Button
                onClick={props.onClickHandler}
                type="button"
                intent="secondary"
                className="hover:text-foreground"
            >
                <span className="sr-only">Open main menu</span>
                <Bar />
            </Button>
            <SwitcherMode />
        </div>
    );
};

export default NavToggle;
