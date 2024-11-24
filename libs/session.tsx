import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
    isLoggedIn: boolean;
    token: string;
}

export interface Claims {
    id: string;
    email: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
    token: "",
};

export const sessionOptions: SessionOptions = {
    cookieName: "auth",
    password: "complex_password_at_least_32_characters_long",
    cookieOptions: {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        maxAge: 86400,
    },
};

export const getIronSessionData = async () => {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    return session;
};
