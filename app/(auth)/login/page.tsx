import { FooterForm } from "@/components/auth/auth-footer";
import { Input } from "@/components/auth/auth-input";
import { RememberMe } from "@/components/auth/auth-remember-me";
import { TermsConditions } from "@/components/auth/auth-term-conditions";
import { TitleFormAuth } from "@/components/auth/auth-title";
import { Button } from "@/components/button";
import Link from "next/link";

const Login = () => {
    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <TitleFormAuth>Sign in to your account</TitleFormAuth>
                <Input name="email" label="Your email" placeholder="name@company.com" />
                <Input name="password" label="Your Password" placeholder="••••••••" />
                <RememberMe />
                <Button type="submit" className="w-full">
                    Sign in
                </Button>
                <FooterForm>
                    Don’t have an account yet ?{" "}
                    <Link
                        href="/signup"
                        rel="login page"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Sign up here
                    </Link>
                </FooterForm>
            </form>
        </div>
    );
};

export default Login;
