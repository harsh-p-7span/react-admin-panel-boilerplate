import { Navigate, useLocation } from 'react-router-dom';
import { getUserToken } from '../utils/manageUserToken';
import routes from './routes';
import lazyLoad from '../libs/lazyLoad';
import React from 'react';
import Sidebar from '../components/Sidebar';

const ProtectedRoute = ({
    children
}: {
    children: React.LazyExoticComponent<() => JSX.Element>;
}) => {
    const token = getUserToken();
    const location = useLocation();

    if ([null, ''].includes(token)) {
        return (
            <Navigate to={`${routes.public.signin}?redirect=${location.pathname}`} replace={true} />
        );
    }

    return (
        <div className="flex h-full">
            <Sidebar />

            {lazyLoad(children)}
        </div>
    );
};

export default ProtectedRoute;
