import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PageHeader = ({
    title,
    prevRoutes,
    headerClass,
    rightSideElements
}: {
    title: string;
    prevRoutes?: {
        url: string;
        title: string;
    }[];
    headerClass?: string;
    rightSideElements?: JSX.Element | JSX.Element[];
}) => {
    const navigate = useNavigate();

    return (
        <div className="app__header">
            <div
                className={`flex items-center py-2 px-4 shadow relative z-30 bg-white h-14 ${headerClass}`}
            >
                {prevRoutes && prevRoutes.length ? (
                    <span className="mr-3" onClick={() => navigate(-1)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="text-2xl text-gray-900 cursor-pointer"
                        >
                            <path
                                fill="currentColor"
                                d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.42L6.83 13H21v-2Z"
                            ></path>
                        </svg>
                    </span>
                ) : null}
                {prevRoutes
                    ? prevRoutes.map((route, index) => {
                          return (
                              <Fragment key={index}>
                                  <Link to={route.url} className="text-gray-500">
                                      {route.title}
                                  </Link>

                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                  >
                                      <path
                                          fill="currentColor"
                                          d="m7 21l7.9-18H17L9.1 21H7Z"
                                      ></path>
                                  </svg>
                              </Fragment>
                          );
                      })
                    : null}

                <p className="breadcrumbs flex items-center capitalize text-zinc-900 space-x-2 text-sm p-1 font-medium">
                    {title}
                </p>

                {rightSideElements}
            </div>
        </div>
    );
};

export default PageHeader;
