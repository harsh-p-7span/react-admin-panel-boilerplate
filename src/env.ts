import { getOsEnv } from './libs/env';

const env = {
    env: getOsEnv('VITE_ENV'),

    app: {
        backend_url: getOsEnv('VITE_BACKEND_URL'),
        api_prefix: getOsEnv('VITE_API_PREFIX'),
        user_token_id: getOsEnv('VITE_USER_TOKEN_ID')
    }
};

export default env;
