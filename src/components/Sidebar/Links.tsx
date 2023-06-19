import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../router/routes';

const Links = ({ handleToggleExpandSideBar }: IProps) => {
    return (
        <Fragment>
            <div className="flex-grow overflow-auto">
                <div className="flex flex-col items-center justify-center space-y-1 p-2">
                    {links.map((link) => {
                        return (
                            <Link to={link.link} key={link.id} className="link block w-full">
                                <div className="w-full inline-flex items-center px-4 h-11 bg-gray-700 rounded">
                                    <div>{link.icon}</div>

                                    <div className="text-base ml-2">{link.title}</div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="border-t-2 border-gray-800">
                <div onClick={handleToggleExpandSideBar}>
                    <p>Collapse</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Links;

const links = [
    {
        id: 0,
        title: 'Dashboard',
        link: routes.private.dashboard,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10 8h-8v10h8V11m-10 4H3v6h8v-6Z"
                />
            </svg>
        )
    }
];

interface IProps {
    handleToggleExpandSideBar: () => void;
}
