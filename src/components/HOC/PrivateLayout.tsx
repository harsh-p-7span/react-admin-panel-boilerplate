import Sidebar from '../Sidebar';

const PrivateLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="app">
            <div className="app__sidebar">
                <Sidebar />
            </div>

            {children}
        </div>
    );
};

export default PrivateLayout;
