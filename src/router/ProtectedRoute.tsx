import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import lazyLoad from '../libs/lazyLoad';
import { getUserToken } from '../utils/manageUserToken';
import routes from './routes';
import PrivateLayout from '../components/HOC/PrivateLayout';

const ProtectedRoute = ({
    children
}: {
    children: React.LazyExoticComponent<() => JSX.Element>;
}) => {
    const token = getUserToken();
    const location = useLocation();

    if ([null, ''].includes(token)) {
        return (
            <Navigate
                to={`${routes.public.signin.url}?redirect=${location.pathname}`}
                replace={true}
            />
        );
    }

    return (
        <div className="flex h-full">
            <Sidebar />

            <PrivateLayout>{lazyLoad(children)}</PrivateLayout>
        </div>
    );
};

export default ProtectedRoute;
