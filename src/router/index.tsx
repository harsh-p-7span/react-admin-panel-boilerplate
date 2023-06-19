import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import routes from './routes';

// Private pages
const Dashboard = React.lazy(async () => await import('../pages/private/Dashboard'));
const Profile = React.lazy(async () => await import('../pages/private/Profile'));

// Public pages
const SignIn = React.lazy(async () => await import('../pages/public/SignIn'));
const ForgotPassword = React.lazy(async () => await import('../pages/public/ForgotPassword'));

const Router = () => {
    return (
        <Routes>
            <Route
                element={<ProtectedRoute>{Dashboard}</ProtectedRoute>}
                path={routes.private.dashboard}
            />
            <Route
                element={<ProtectedRoute>{Profile}</ProtectedRoute>}
                path={routes.private.profile}
            />

            <Route element={<PublicRoute>{SignIn}</PublicRoute>} path={routes.public.signin} />
            <Route
                element={<PublicRoute>{ForgotPassword}</PublicRoute>}
                path={routes.public.forgotPassword}
            />

            <Route element={<Navigate to={routes.private.dashboard} />} path="*" />
        </Routes>
    );
};

export default Router;
