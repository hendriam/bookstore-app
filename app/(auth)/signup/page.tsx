import FormSignUp from "@/components/auth/form-sign-up";

export const metadata = {
    title: "Mystore - Sign up",
    description: "Create your account",
};

const SignUp = () => {
    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <FormSignUp />
        </div>
    );
};

export default SignUp;
