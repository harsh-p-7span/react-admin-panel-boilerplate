const PageHeaderButtons = () => {
    return (
        <div>
            <div className="flex items-center gap-4 bg-red-600 text-white p-3 rounded-md cursor-pointer">
                <svg
                    className="icon group-hover:text-gray-900 mx-auto relative z-10 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"></path>
                </svg>

                <p className="text-xs">Add User</p>
            </div>
        </div>
    );
};

export default PageHeaderButtons;
