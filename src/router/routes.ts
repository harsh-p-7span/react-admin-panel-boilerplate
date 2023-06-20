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
        users: {
            url: '/users',
            title: 'Users'
        }
    }
};

export default routes;
