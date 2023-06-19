import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ResetPasswordAPI } from '../../../api/auth';
import toast from '../../../libs/toast';
import { useState } from 'react';
import routes from '../../../router/routes';

const schema = z.object({
    mobileNumber: z
        .string({
            required_error: 'The Mobile Number field is required.',
            invalid_type_error: 'The Mobile Number field is required.'
        })
        .nonempty('The Mobile Number field is required.')
        .refine((data) => isMobilePhone(data, 'en-IN'), 'Enter a valid mobile number.')
});
export type ForgotPasswordFormSchemaType = z.infer<typeof schema>;

const Form = () => {
    const [successMessage, setSuccessMessage] = useState<undefined | string>();

    const { mutate, isLoading } = useMutation({
        mutationFn: ResetPasswordAPI,
        onSuccess: (data) => {
            console.log(data);
            setSuccessMessage(_.get(data, 'message'));
        },
        onError(error) {
            toast(_.get(error, 'response.data.message'));
        }
    });

    const formik = useFormik({
        validationSchema: toFormikValidationSchema(schema),
        initialValues: {
            mobileNumber: ''
        },
        onSubmit: async (values) => {
            mutate(values);
        }
    });

    return successMessage ? (
        <div className="w-1/2 flex justify-center items-center flex-col">
            <p className="text-xl text-center">{successMessage}</p>

            <Link
                to={routes.public.signin}
                className="mt-4 bg-[#F80400] text-white py-3 px-2 text-sm rounded-md w-36 text-center"
            >
                Login?
            </Link>
        </div>
    ) : (
        <form
            className="w-1/2 bg-white flex justify-center items-center flex-col"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >
            <h3 className="text-5xl font-bold text-gray-700 py-6">Forgot Password?</h3>

            <div className="flex flex-col w-96">
                <label htmlFor="mobileNumber" className="text-[#6B7280] text-sm">
                    Mobile Number *
                </label>

                <div className="bg-[#E5E7EB] h-11 w-full px-3 rounded-md mt-2 mb-1">
                    <input
                        autoFocus
                        disabled={isLoading}
                        type="text"
                        id="mobileNumber"
                        className="bg-[#E5E7EB] h-full w-full outline-none"
                        value={formik.values.mobileNumber}
                        onChange={(e) => {
                            e.preventDefault();

                            const regex = new RegExp(/^[0-9]{0,10}$/gm);
                            if (regex.test(e.target.value)) {
                                formik.setFieldValue('mobileNumber', e.target.value);
                            }
                        }}
                    />
                </div>

                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                    <p className="text-[#FC3C2A] text-xs">{formik.errors.mobileNumber}</p>
                ) : null}
            </div>

            <div className="w-96 flex justify-between items-center mt-8">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#F80400] text-white py-3 px-2 text-sm rounded-md w-36"
                >
                    {isLoading ? (
                        <div role="status" className="flex">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-white animate-spin dark:text-white fill-blue-600 mx-auto"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                        </div>
                    ) : (
                        'Submit'
                    )}
                </button>

                <Link to={routes.public.signin}>Login?</Link>
            </div>
        </form>
    );
};

export default Form;
