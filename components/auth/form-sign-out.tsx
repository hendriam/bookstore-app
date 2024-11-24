import { logoutAction } from "@/api/api-auth";
import { useFormStatus } from "react-dom";

const FormSignOut = () => {
    const { pending } = useFormStatus();

    return (
        <form action={logoutAction}>
            <button
                disabled={pending}
                className="w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
                {pending ? "Sign out..." : "Sign out"}
            </button>
        </form>
    );
};

export default FormSignOut;
