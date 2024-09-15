import { EmailOtpForm } from '@/components/forms/EmailVerificationForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function VerifyEmail() {
  const [VerificationMethod,setVerificationMethod] =useState('Email')
  const HandleClick=()=>{
    setVerificationMethod("Phone")
  }
  return (
    <>
      <div className=" justify-center flex items-center min-h-screen ">
        <div className="w-[90vw] flex flex-col items-center my-1  border rounded-xl  justify-center py-5 md:w-[500px] bg-white  ">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[113px] h-[90px] mt-2 mb-6"></div>
          <div className="mb-4">
            <h3 className="text-center font-bold text-2xl mb-2">Verify {VerificationMethod}</h3>
            <p className=" text-center font-normal text-sm px-3 text-inactive">
              An OTP has been sent to your {VerificationMethod}
            </p>
          </div>
          <div className=" w-full">
            <div className="my-2 px-5 md:px-10">
              <p className="text-primary text-[18px] font-normal" onClick={HandleClick}>Send code to phone</p>
            </div>
            <EmailOtpForm />
          </div>
          <div className="my-4">
            <h4 className="text-inactive">
              Didn&apos;t get verification code?
              <span className="text-primary">
                <Link to="/login">Resend</Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
