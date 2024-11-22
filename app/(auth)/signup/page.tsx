import { FooterForm } from "@/components/auth/auth-footer";
import { Input } from "@/components/auth/auth-input";
import { TermsConditions } from "@/components/auth/auth-term-conditions";
import { TitleFormAuth } from "@/components/auth/auth-title";
import { Button } from "@/components/button";
import Link from "next/link";

export const metadata = {
    title: "Sign-up Page",
    description: "Create your account",
};

const SignUp = () => {
    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <TitleFormAuth>Create your account</TitleFormAuth>
                <Input name="fullname" label="Fullname" placeholder="John Doe" />
                <Input name="email" label="Your email" placeholder="name@company.com" />
                <Input name="password" label="Your Password" placeholder="••••••••" />
                <TermsConditions />
                <Button type="submit" className="w-full">
                    Create an account
                </Button>
                <FooterForm>
                    Already have an account ?{" "}
                    <Link
                        href="/login"
                        rel="login page"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Sign in here
                    </Link>
                </FooterForm>
            </form>
        </div>
    );
};

export default SignUp;
