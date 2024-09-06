import { EmailOtpForm } from '@/components/forms/EmailVerificationForm';
import { Link } from 'react-router-dom';

function VerifyEmail() {
  return (
    <>
      <div className=" flex  md:justify-center  items-center min-h-screen w-[100%]   md:w-full">
        <div className="w-[90%] mx-10 xs:w-[86%] xs:mx-3 flex flex-col items-center my-1  border rounded-xl  justify-center py-5 md:w-[500px]  ">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[113px] h-[90px] mt-2 mb-6"></div>
          <div className="mb-4">
            <h3 className="text-center font-bold text-2xl mb-2">Verify Email</h3>
            <p className=" text-center font-normal text-sm px-3 text-inactive">
              An OTP has been sent to your Email
            </p>
          </div>
          <div className=" w-full">
            <div className="my-2 px-20 md:px-10">
              <p className="text-primary text-[18px] font-normal">Send code to phone</p>
            </div>
            <EmailOtpForm />
          </div>
          <div className="my-4">
            <h4 className="text-inactive">
              Didn&apos;t get verification code?
              <span className="text-primary">
                <Link to="/signup">Resend</Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
