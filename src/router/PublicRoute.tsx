import { Navigate } from 'react-router-dom';
import { getUserToken } from '../utils/manageUserToken';
import routes from './routes';
import React from 'react';
import lazyLoad from '../libs/lazyLoad';

const PublicRoute = ({ children }: { children: React.LazyExoticComponent<() => JSX.Element> }) => {
    const token = getUserToken();

    if (![null, ''].includes(token)) {
        return <Navigate to={routes.private.dashboard} replace={true} />;
    }

    return lazyLoad(children);
};

export default PublicRoute;
