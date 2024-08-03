import React, { useState } from 'react'
import { Form, Formik } from "formik";
import CustomPassword from '@/components/FormElements/CustomPassword';
import Button from '@/components/dashboard/ui/buttons/Button';
import EditIcon from '@/components/icons/EditIcon';
import { PasswordChangeSchema } from '@/utils/schema';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/errorUtils';
import Spinner from '@/components/loader/Spinner';
import dashboardService from '@/services/dashboardService';

const Security = ({ token  }) => {

  const [twoFa, setTwoStepAuthEnabled] = useState(true);
  const [askToChangePassword, setAskToChangePassword] = useState(false);
  const [loading, setLoading] = useState(false)

  return (
    <div className='sm:mr-16'>

      <Formik
        initialValues={{
          password: '',
          currentPassword: '',
          confirm_password: ''
        }}
        validationSchema={PasswordChangeSchema}
        onSubmit={async (values, actions) => {

          const { confirm_password, ...data } = values;

          setLoading(true);

          try {

            const response = await dashboardService.updatePassword(data, token);

            toast.success(response?.message);
            actions.resetForm();

          } catch (error) {

            const message = getErrorMessage(error)
            toast.error(message);

          } finally {
            setLoading(false);
          }

        }}
      >
        {({ values, setFieldValue, errors, touched }) => (

          <Form autoComplete='off'>

            <div className="border border-gray-300 p-3 md:p-5 rounded-lg mb-3">

              <div className="flex flex-col lg:flex-row gap-5">

                <div className="w-full lg:w-[65%]">

                  <h1 className='text-blue font-semibold mb-5'>Update password</h1>

                  <CustomPassword className='rounded-[8px] text-blue font-medium bg-[#F4F6FB]' label="Current Password" name="currentPassword" placeholder="Enter current password" />

                  <CustomPassword className='rounded-[8px] text-blue font-medium bg-[#F4F6FB]' label="New Password" name="password" placeholder="Enter new password" />

                  <CustomPassword className='rounded-[8px] text-blue font-medium bg-[#F4F6FB]' label="Confirm New Password" name="confirm_password" placeholder="Confirm new password" />

                  <Button loading={loading} type='submit' className='btn-primary mt-5 py-3 w-full text-xs'>
                    <span className='text-xs'>Update Password</span>
                  </Button>

                </div>

                <div className="lg:flex w-full lg:w-[35%]">
                  <div className="self-end ">
                    <div className="bg-[#f1fcf5] rounded-lg w-full p-3 md:p-5 text-[12px]">

                      <h2 className="text-blue font-semibold mb-3">Password requirements</h2>

                      <ul className="max-w-md text-blue list-disc list-inside">
                        <li>
                          Minimum 8 character
                        </li>
                        <li>
                          At least 1 special character
                        </li>
                        <li>
                          At least 2 number
                        </li>
                        <li>
                          Can’t be the same as a previous password
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

              </div>

              <hr className="w-full my-5" />

              <div className="flex items-center justify-between flex-wrap">
                <div className="">
                  <p className="font-medium text-sm text-blue">Enable 2-step authentication</p>
                  <p className="text-xs font-light text-lightGray">Protects you against password theft by requesting an authentication code via SMS on every login.</p>
                </div>

                <div className="flex items-center mt-3 md:mt-0">
                  <input type="checkbox" id="hs-valid-toggle-switch" className="flex items-center
                    relative shrink-0 w-[3.25rem] h-7 bg-gray-400 checked:bg-none ring-0 focus:ring-0 checked:bg-green border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 checked:hover:bg-green-600 checked:focus:bg-green-600 
                    before:inline-block before:w-6 before:h-6 before:bg-white before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"

                    onChange={() => setTwoStepAuthEnabled(!twoFa)}
                    checked={twoFa}
                  />
                </div>

              </div>

              <hr className="w-full my-5" />

              <div className="flex items-center justify-between flex-wrap">
                <div className="">
                  <p className="font-medium text-blue text-sm">Ask to change password on every 6 months</p>
                  <p className="text-xs font-light text-lightGray">Protected against data leaks and password theft..</p>
                </div>

                <div className="flex items-center mt-3 md:mt-0">
                  <input type="checkbox" id="hs-valid-toggle-switch" className="flex items-center
                    relative shrink-0 w-[3.25rem] h-7 bg-gray-400 checked:bg-none ring-0 focus:ring-0 checked:bg-green border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 checked:hover:bg-green-600 checked:focus:bg-green-600 
                    before:inline-block before:w-6 before:h-6 before:bg-white before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"

                    onChange={() => setAskToChangePassword(!askToChangePassword)}
                    checked={askToChangePassword}

                  />
                </div>

              </div>

            </div>

          </Form>
        )}
      </Formik>


    </div>
  )
}

export default Security