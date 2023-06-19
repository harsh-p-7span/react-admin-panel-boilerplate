import request from '../libs/interceptor';
import { ForgotPasswordFormSchemaType } from '../pages/public/ForgotPassword/Form';
import { SignInFormSchemaType } from '../pages/public/SignIn/Form';

export const SignInAPI = async (body: SignInFormSchemaType) => {
    return await request.post('auth/signin', body);
};

export const ResetPasswordAPI = async (body: ForgotPasswordFormSchemaType) => {
    return await request.post('auth/reset-password', body);
};
