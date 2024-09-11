import { ResetPasswordForm } from '@/components/forms/ResetPasswordForm';
import { Link } from 'react-router-dom';

function ResetPasswordPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center w-[90vw] border rounded-lg bg-white justify-center py-5 md:w-[500px]">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[200px] h-[100px]"></div>
          <div className="mt-3 mb-4 px-10">
            <h3 className="text-center font-bold text-2xl">Set New Password</h3>
            <p className="font-normal text-[16px]">Must atleast be 8 characters long</p>
          </div>
          <div className="w-full px-10">
            <ResetPasswordForm />
          </div>
          <div className="my-3">
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

export default ResetPasswordPage;
