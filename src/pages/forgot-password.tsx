import React from 'react';
import { ForgotPassword } from '@/components/Forms/ForgotPasswordForm';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center w-[90%] border rounded-lg bg-white justify-center py-5 md:w-[400px]">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[200px] h-[100px]"></div>
          <div className="mt-3 mb-4 px-10">
            <h3 className="text-center font-bold text-2xl">Forgot Password</h3>
            <p className="font-normal text-[16px]">
              Enter your email so we can send you a link to reset your password
            </p>
          </div>
          <div className="w-full px-10">
            <ForgotPassword />
          </div>
          <div className="my-2">
            <h4>
              Remember password?
              <span className="text-primary">
                <Link to="/login">Login</Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
