import { VerifyOtPForm } from '@/components/common/forms/VerifyChangePasswordRequest';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { useLoading } from '@/utils/context/LoaderContext';
import { ForgotPassword } from '@/utils/hooks/api-routes';
import { useState } from 'react';

function VerifyOtp() {
  const { dispatchLoader } = useLoading();
  const email = localStorage.getItem('password_reset_email');
  const [resetTimer] = useState(false);
  const [VerificationMethod] = useState('Email');

  const handleResendOtp = async () => {
    dispatchLoader(true);
    try {
      const response = await fetch(ForgotPassword(email, 'r'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailOrWorkPhone: email
        })
      });

      const message = await response.text();
      
      if (response.ok) {
        SuccessToast(`OTP ${message} to ${email}`);
      } else {
        ErrorToast(message);
      }
    } catch (error: any) {
      ErrorToast('Error resending OTP:' + error.message);
    } finally {
      dispatchLoader(false)
    }
  };

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
            <div className="my-2 px-5 md:px-10"></div>
            <VerifyOtPForm resetTimer={resetTimer} />
          </div>
          <div className="my-4">
            <h4 className="text-inactive">
              Didn&apos;t get verification code?
              <span className="text-primary cursor-pointer" onClick={handleResendOtp}>
                Resend
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyOtp;
