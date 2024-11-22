"use client";

import Link from "next/link";
import { Button } from "../button";
import { FooterForm } from "./auth-footer";
import { Input } from "./auth-input";
import { RememberMe } from "./auth-remember-me";
import { TitleFormAuth } from "./auth-title";
import ButtonLoading from "../button-loading";
import { loginAction } from "@/api/api-auth";
import { useActionState } from "react";
import { after } from "node:test";

export const FormSignIn = () => {
    const [data, formAction, isLoading] = useActionState(loginAction, null);
    console.log("data in component", data);

    return (
        <form className="space-y-3" action={formAction}>
            <TitleFormAuth>Sign in to your account</TitleFormAuth>
            <div>
                <h2 className="text-xs font-semibold text-red-500 dark:text-gray-500">
                    {data?.errors ? data?.message + ":" : data?.message}
                </h2>
                <ul className="flex flex-col text-xs font-semibold text-red-500 list-disc list-inside dark:text-gray-500">
                    {data?.errors?.map((err) => (
                        <li key={err.path} className="">
                            {err.msg}
                        </li>
                    ))}
                </ul>
            </div>
            <Input name="email" label="Your email" placeholder="name@company.com" />
            <Input name="password" label="Your Password" placeholder="••••••••" />
            <RememberMe />
            {isLoading ? (
                <ButtonLoading />
            ) : (
                <Button type="submit" className="w-full">
                    Sign in
                </Button>
            )}
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
    );
};
