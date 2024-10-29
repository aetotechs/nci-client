import { ResetPasswordForm } from '@/components/common/forms/ResetPasswordForm';
import { Link } from 'react-router-dom';

function ResetPasswordPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center w-[90vw] border border-primary/30 rounded-lg bg-white justify-center py-5 md:w-[500px]">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[73px] h-[66px] md:w-[109px] md:h-[86px]"></div>
          <div className="mt-3 px-5  md:px-10">
            <h3 className="text-center font-bold text-xl md:text-[22px]">Set New Password</h3>
            <p className="font-normal text-[13px] md:text-sm text-muted-foreground">
              Must atleast be 8 characters long
            </p>
          </div>
          <div className="w-full px-5 md:px-10">
            <ResetPasswordForm />
          </div>
          <div className="text-[13px] md:text-sm mt-5  md:my-5">
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

export default ResetPasswordPage;
