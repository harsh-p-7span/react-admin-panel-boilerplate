const Header = () => {
    return (
        <div className="sticky top-0 bg-white z-10 text-gray-900 text-body border-b">
            <div className="flex h-12 items-stretch bg-white">
                <div className="px-3 flex items-center justify-center h-12 border-r">
                    <p className="font-bold leading-none">Users</p>

                    <p className="leading-none text-gray-500 ml-1">(11)</p>
                </div>

                <div className="border-r flex-grow relative">
                    <input
                        type="text"
                        className="w-full h-12 px-4 outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200"
                        name=""
                        id=""
                        placeholder="Search"
                    />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="icon w-6 h-6 absolute right-4 top-0 bottom-0 my-auto text-gray-300"
                    >
                        <path
                            fill="currentColor"
                            d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
                        ></path>
                    </svg>
                </div>

                <div className="flex text-xl">
                    {actionButtons.map((button, index) => {
                        return (
                            <button
                                className={`cursor-pointer group w-12 ${
                                    index > 0 ? 'border-l ' : ''
                                }`}
                                key={button.id}
                            >
                                <span className="block relative">{button.icon}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;

const actionButtons = [
    {
        id: 0,
        icon: (
            <svg
                className="icon group-hover:text-gray-900 mx-auto relative z-10 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"
                ></path>
            </svg>
        )
    },
    {
        id: 1,
        icon: (
            <svg
                className="icon group-hover:text-gray-900 mx-auto relative z-10 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z"
                ></path>
            </svg>
        )
    },
    {
        id: 2,
        icon: (
            <svg
                className="icon group-hover:text-gray-900 mx-auto relative z-10 text-gray-400"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
                ></path>
            </svg>
        )
    },
    {
        id: 3,
        icon: (
            <svg
                className="icon group-hover:text-gray-900 mx-auto relative z-10 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"></path>
            </svg>
        )
    }
];
