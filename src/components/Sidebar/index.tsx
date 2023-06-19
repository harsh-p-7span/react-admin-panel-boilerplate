import { useState } from 'react';
import Logo from './Logo';
import Links from './Links';

const Sidebar = () => {
    const [expandSideBar, setExpandSideBar] = useState(true);

    const handleToggleExpandSideBar = () => {
        setExpandSideBar((prev) => {
            return !prev;
        });
    };

    return (
        <div
            className={`flex flex-col h-full bg-gray-900 text-white ${
                expandSideBar ? 'w-60' : 'w-min'
            }`}
        >
            <Logo expandSideBar={expandSideBar} />

            <Links handleToggleExpandSideBar={handleToggleExpandSideBar} />
        </div>
    );
};

export default Sidebar;
