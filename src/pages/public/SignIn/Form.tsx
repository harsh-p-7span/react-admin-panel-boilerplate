import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const schema = z.object({
    mobileNumber: z
        .string({
            required_error: 'The Mobile Number field is required.',
            invalid_type_error: 'The Mobile Number field is required.'
        })
        .nonempty('The Mobile Number field is required.')
        .refine((data) => isMobilePhone(data, 'en-IN'), 'Enter a valid mobile number.'),
    password: z
        .string({
            required_error: 'The Password field is required.',
            invalid_type_error: 'The Password field is required.'
        })
        .nonempty('The Password field is required.')
});
export type SchemaType = z.infer<typeof schema>;

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const formik = useFormik({
        validationSchema: toFormikValidationSchema(schema),
        initialValues: {
            mobileNumber: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form
            className="w-1/2 bg-white flex justify-center items-center flex-col"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >
            <h3 className="text-5xl font-bold text-gray-700 py-6">Login</h3>

            <div className="flex flex-col w-96">
                <label htmlFor="mobileNumber" className="text-[#6B7280] text-sm">
                    Mobile Number *
                </label>

                <div className="bg-[#E5E7EB] h-11 w-full px-3 rounded-md mt-2 mb-1">
                    <input
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

                {formik.errors.mobileNumber ? (
                    <p className="text-[#FC3C2A] text-xs">{formik.errors.mobileNumber}</p>
                ) : null}
            </div>

            <div className="flex flex-col mt-4 w-96">
                <label htmlFor="password" className="text-[#6B7280] text-sm">
                    Password *
                </label>

                <div className="bg-[#E5E7EB] h-11 w-full px-3 rounded-md mt-2 mb-1 flex gap-3 items-center justify-stretch">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="bg-[#E5E7EB] h-full w-full outline-none"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    <div
                        className="cursor-pointer flex justify-center items-center"
                        onClick={handleToggleShowPassword}
                    >
                        {showPassword ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        )}
                    </div>
                </div>

                {formik.errors.password ? (
                    <p className="text-[#FC3C2A] text-xs">{formik.errors.password}</p>
                ) : null}
            </div>

            <div className="w-96 flex justify-between items-center mt-8">
                <button
                    type="submit"
                    className="bg-[#F80400] text-white py-3 px-2 text-sm rounded-md w-36"
                >
                    Login
                </button>

                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </form>
    );
};

export default Form;
