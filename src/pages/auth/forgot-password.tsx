import { ForgotPasswordForm } from '@/components/common/forms/ForgotPasswordForm';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center w-[90%] border border-primary/30 rounded-lg bg-white justify-center py-5 md:w-[500px]">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[73px] h-[66px] md:w-[109px] md:h-[86px]"></div>
          <div className="mt-3 mb-4 px-5">
            <h3 className="text-center font-bold text-xl md:text-[22px]">Forgot Password</h3>
            <p className="font-normal leading-4 text-[13px] md:leading-5 md:text-sm text-muted-foreground">
              Enter your email so we can send you a link to reset your password
            </p>
          </div>
          <div className="w-full px-5 ">
            <ForgotPasswordForm />
          </div>
          <div className="text-[13px] md:text-sm">
            <h4>
              Remember password?
              <span className="text-primary mx-2">
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
