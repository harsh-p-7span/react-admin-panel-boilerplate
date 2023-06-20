const routes = {
    public: {
        signin: {
            url: '/signin',
            title: 'Sign In'
        },
        'forgot-password': {
            url: '/forgot-password',
            title: 'Forgot Password'
        }
    },
    private: {
        dashboard: {
            url: '/dashboard',
            title: 'Dashboard'
        },
        profile: {
            url: '/profile',
            title: 'Profile'
        },
        'residual-spray-tasks': {
            url: '/residual-spray-tasks',
            title: 'IRS'
        }
    }
};

export default routes;
