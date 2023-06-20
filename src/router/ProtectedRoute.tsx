import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PrivateLayout from '../components/HOC/PrivateLayout';
import lazyLoad from '../libs/lazyLoad';
import { getUserToken } from '../utils/manageUserToken';
import routes from './routes';

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

    return <PrivateLayout>{lazyLoad(children)}</PrivateLayout>;
};

export default ProtectedRoute;
