import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ResetPasswordAPI } from '../../../api/auth';
import toast from '../../../libs/toast';

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
    const mutation = useMutation({
        mutationFn: ResetPasswordAPI,
        onSuccess: (data) => {
            console.log(data);
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
            mutation.mutate(values);
        }
    });

    return (
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
                    className="bg-[#F80400] text-white py-3 px-2 text-sm rounded-md w-36"
                >
                    Submit
                </button>

                <Link to="/login">Login?</Link>
            </div>
        </form>
    );
};

export default Form;
