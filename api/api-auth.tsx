"use server";

interface Response {
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

export const loginAction = async (prevState: any, formData: FormData): Promise<Response> => {
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
            let err: Response = await res.json();
            return err;
        }

        let data: Response = await res.json();
        return data;
    } catch (err: any) {
        return err;
    }
};
