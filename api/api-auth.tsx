"use server";

import { SessionData, sessionOptions } from "@/libs/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ResponseLogin {
    message?: string;
    token?: string;
    errors?: {
        type: string;
        value: string;
        msg: string;
        path: string;
        location: string;
    }[];
}

interface ResponseSignUp {
    code: number;
    message?: string;
    errors?: {
        type: string;
        value: string;
        msg: string;
        path: string;
        location: string;
    }[];
}

export const loginAction = async (prevState: any, formData: FormData): Promise<ResponseLogin> => {
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;
    let url = `http://localhost:3000/api/v1/users/login`;

    try {
        let res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            let err: ResponseLogin = await res.json();
            return err;
        }

        let data: ResponseLogin = await res.json();
        await storeIronSessionData(data.token);
        return data;
    } catch (err: any) {
        return err;
    }
};

export const signupAction = async (prevState: any, formData: FormData): Promise<ResponseSignUp> => {
    let fullname = formData.get("fullname") as string;
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;
    let url = `http://localhost:3000/api/v1/users/register`;

    try {
        let res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ fullname, email, password }),
        });

        if (!res.ok) {
            let statusCode = res.status;
            let err: ResponseSignUp = await res.json();
            err.code = statusCode;
            return err;
        }

        let data: ResponseSignUp = await res.json();
        data.code = res.status;
        return data;
    } catch (err: any) {
        return err;
    }
};

export const logoutAction = async () => {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    session.destroy();
    redirect("/");
};

const storeIronSessionData = async (token: any) => {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    session.isLoggedIn = true;
    session.token = token;
    await session.save();
};
