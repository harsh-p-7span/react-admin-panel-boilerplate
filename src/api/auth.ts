import request from '../libs/interceptor';
import { SignInFormSchemaType } from '../pages/public/SignIn/Form';

export const SignInAPI = async (body: SignInFormSchemaType) => {
    return await request.post('auth/signin', body);
};
