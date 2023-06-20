import Sidebar from '../Sidebar';

const PrivateLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const title = 'Dashboard';

    return (
        <div className="flex h-full">
            <Sidebar />

            <div className="flex-1 flex flex-col w-full h-full">
                <div className="flex items-center py-2 px-4 shadow relative z-30 bg-white">
                    <p className="breadcrumbs flex items-center capitalize text-gray-500 space-x-2 text-sm p-1 font-medium">
                        {title}
                    </p>
                </div>

                <div className="flex-1 overflow-auto">{children}</div>
            </div>
        </div>
    );
};

export default PrivateLayout;
