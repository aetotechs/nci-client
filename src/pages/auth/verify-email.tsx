import { EmailOtpForm } from '@/components/common/forms/EmailVerificationForm';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { ResendOtp } from '@/utils/hooks/api-routes';
import { useState } from 'react';

function VerifyEmail() {
  const email = localStorage.getItem('acc_verification_email');
  const [resetTimer, setResetTimer] = useState(false);
  const [VerificationMethod, setVerificationMethod] = useState('Email');

  const HandleClick = () => {
    setVerificationMethod('Phone');
  };
  const handleResendOtp = async () => {
    try {
      const response = await fetch(ResendOtp(email) + "type=v", {
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
        SuccessToast(message);
        window.location.reload();
      } else {
        ErrorToast(message);
      }
    } catch (error) {
      ErrorToast('Error resending OTP:' + error);
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
            <div className="my-2 px-5 md:px-10">
              <p
                className="text-primary text-[18px] font-normal cursor-pointer"
                onClick={HandleClick}
              >
                Send code to phone
              </p>
            </div>
            <EmailOtpForm resetTimer={resetTimer} />
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

export default VerifyEmail;
