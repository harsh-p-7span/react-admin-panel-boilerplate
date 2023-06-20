import Sidebar from '../Sidebar';

const PrivateLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const title = 'Dashboard';

    return (
        <div className="app">
            <div className="app__sidebar">
                <Sidebar />
            </div>

            <div className="app__header">
                <div className="flex items-center py-2 px-4 shadow relative z-30 bg-white">
                    <p className="breadcrumbs flex items-center capitalize text-gray-500 space-x-2 text-sm p-1 font-medium">
                        {title}
                    </p>
                </div>
            </div>

            <div className="app__body">{children}</div>
        </div>
    );
};

export default PrivateLayout;
