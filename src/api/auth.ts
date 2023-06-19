import request from '../libs/interceptor';
import { ForgotPasswordFormSchemaType } from '../pages/public/ForgotPassword/Form';
import { SignInFormSchemaType } from '../pages/public/SignIn/Form';
import { delay } from '../utils';

export const SignInAPI = async (body: SignInFormSchemaType) => {
    delay(10000);
    return await request.post('auth/signin', body);
};

export const ResetPasswordAPI = async (body: ForgotPasswordFormSchemaType) => {
    delay(10000);
    return await request.post('auth/reset-password', body);
};
