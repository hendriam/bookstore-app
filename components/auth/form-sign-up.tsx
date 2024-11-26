"use client";

import { signupAction } from "@/api/api-auth";
import { FooterForm } from "@/components/auth/auth-footer";
import { Input } from "@/components/auth/auth-input";
import { TermsConditions } from "@/components/auth/auth-term-conditions";
import { TitleFormAuth } from "@/components/auth/auth-title";
import { Button } from "@/components/button";
import Link from "next/link";
import { useActionState } from "react";
import ButtonLoading from "../button-loading";

const FormSignUp = () => {
    const [data, formAction, isLoading] = useActionState(signupAction, null);
    return (
        <form className="space-y-3" action={formAction}>
            <TitleFormAuth>Create your account</TitleFormAuth>
            {data?.code == 201 ? (
                <h2 className="text-xs font-semibold text-green-500 ">
                    {data.message}. Please, switch to login page!
                </h2>
            ) : (
                <h2 className="text-xs font-semibold text-red-500 ">
                    {data?.code == 400 ? data.message : data?.message}
                </h2>
            )}
            <ul className="flex flex-col text-xs font-semibold text-red-500 list-disc list-inside ">
                {data?.errors?.map((err) => (
                    <li key={err.path} className="">
                        {err.msg}
                    </li>
                ))}
            </ul>
            <Input name="fullname" label="Fullname" placeholder="John Doe" />
            <Input name="email" label="Your email" placeholder="name@company.com" />
            <Input name="password" label="Your Password" placeholder="••••••••" />
            <TermsConditions />
            {isLoading ? (
                <ButtonLoading />
            ) : (
                <Button type="submit" className="w-full">
                    Create an account
                </Button>
            )}
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
    );
};

export default FormSignUp;
