import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col space-y-2 justify-center items-center h-screen">
            {children}
            <Link
                href="/"
                rel="back to home"
                className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-600 underline italic"
            >
                {" "}
                back to home
            </Link>
        </div>
    );
}
