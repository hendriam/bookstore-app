import { Button } from "./button";
import Spin from "./icon/spin";

const ButtonLoading = () => {
    return (
        <Button type="button" disabled className="w-full justify-center flex items-center">
            <Spin /> Loading...
        </Button>
    );
};

export default ButtonLoading;
