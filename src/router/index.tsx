import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import routes from './routes';

// Private pages
const Dashboard = React.lazy(async () => await import('../pages/private/Dashboard'));
const Profile = React.lazy(async () => await import('../pages/private/Profile'));
const IRS = React.lazy(async () => await import('../pages/private/IRS'));

// Public pages
const SignIn = React.lazy(async () => await import('../pages/public/SignIn'));
const ForgotPassword = React.lazy(async () => await import('../pages/public/ForgotPassword'));

const Router = () => {
    return (
        <Routes>
            <Route
                element={<ProtectedRoute>{Dashboard}</ProtectedRoute>}
                path={routes.private.dashboard.url}
            />
            <Route
                element={<ProtectedRoute>{Profile}</ProtectedRoute>}
                path={routes.private.profile.url}
            />
            <Route
                element={<ProtectedRoute>{IRS}</ProtectedRoute>}
                path={routes.private['residual-spray-tasks'].url}
            />

            <Route element={<PublicRoute>{SignIn}</PublicRoute>} path={routes.public.signin.url} />
            <Route
                element={<PublicRoute>{ForgotPassword}</PublicRoute>}
                path={routes.public['forgot-password'].url}
            />

            <Route element={<Navigate to={routes.private.dashboard.url} />} path="*" />
        </Routes>
    );
};

export default Router;
