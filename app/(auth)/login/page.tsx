import { FormSignIn } from "@/components/auth/form-sign-in";
import { getIronSessionData } from "@/libs/session";
import { decodeJwt } from "jose";

export const metadata = {
    title: "Sign-in Page",
    description: "Create your account",
};

const Login = async () => {
    const session = await getIronSessionData();

    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <FormSignIn />
        </div>
    );
};

export default Login;
