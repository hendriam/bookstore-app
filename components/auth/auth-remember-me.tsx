export const RememberMe = () => {
    return (
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Remember me
                </label>
            </div>
            <a
                href="#"
                className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
                Lost Password?
            </a>
        </div>
    );
};
