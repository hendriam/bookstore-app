import Bar from '../Icons/Bar';

const NavToggle = () => {
    return (
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="bg-red-400 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
        >
            <span className="sr-only">Open main menu</span>
            <Bar />
        </button>
    );
};

export default NavToggle;
