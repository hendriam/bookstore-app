function ButtonSM({ children }) {
    return (
        <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
            {children}
        </button>
    );
}

export default ButtonSM;
