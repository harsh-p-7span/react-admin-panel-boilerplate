import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../router/routes';

const Links = ({ handleToggleExpandSideBar, expandSideBar }: IProps) => {
    const location = useLocation();

    return (
        <Fragment>
            <div className="flex-grow overflow-auto">
                <div className="flex flex-col items-center justify-center space-y-1 py-2 pr-3 pl-2">
                    {links.map((link) => {
                        return (
                            <Link to={link.link} key={link.id} className="block w-full">
                                <div
                                    className={`w-full flex items-center h-11 ${
                                        expandSideBar ? 'px-5' : 'px-4 justify-center'
                                    } ${
                                        location.pathname === link.link ? 'bg-gray-700 rounded' : ''
                                    }`}
                                >
                                    <div>{link.icon}</div>

                                    {expandSideBar ? (
                                        <p className="text-base ml-2">{link.title}</p>
                                    ) : (
                                        false
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="border-t-2 border-gray-800">
                <div className="flex-grow overflow-auto">
                    <div className="flex flex-col items-center justify-center space-y-1 py-2 pr-3 pl-2">
                        <Link to={routes.private.profile.url} className="block w-full">
                            <div
                                className={`w-full flex items-center h-11 ${
                                    expandSideBar ? 'px-5' : 'px-4 justify-center'
                                } ${
                                    location.pathname === routes.private.profile.url
                                        ? 'bg-gray-700 rounded'
                                        : ''
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"
                                    />
                                </svg>

                                {expandSideBar ? <p className="text-base ml-2">Profile</p> : null}
                            </div>
                        </Link>

                        <div
                            onClick={handleToggleExpandSideBar}
                            className="block w-full cursor-pointer"
                        >
                            <div
                                className={`w-full flex items-center h-11 ${
                                    expandSideBar ? 'px-5' : 'px-4 justify-center'
                                }`}
                            >
                                {!expandSideBar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"
                                        />
                                    </svg>
                                )}

                                {expandSideBar ? <p className="text-base ml-2">Collapse</p> : null}
                            </div>
                        </div>
                    </div>
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
        link: routes.private.dashboard.url,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10 8h-8v10h8V11m-10 4H3v6h8v-6Z"
                />
            </svg>
        )
    },
    {
        id: 4,
        title: 'Users',
        link: routes.private['users'].url,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M10 4h2v2h-2V4M7 3h2v2H7V3m0 3h2v2H7V6M6 8v2H4V8h2m0-3v2H4V5h2m0-3v2H4V2h2m7 20a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2V7h1V4h3v3h1v1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5m0-12v10h5V10h-5Z"
                />
            </svg>
        )
    }
];

interface IProps {
    handleToggleExpandSideBar: () => void;
    expandSideBar: boolean;
}
