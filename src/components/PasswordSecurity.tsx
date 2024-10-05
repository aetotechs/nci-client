import { ProfileProps } from '@/pages/profile';
import { ChangePasswordForm } from './forms/ChangePasswordForm';

function PasswordSecurity({ user }: ProfileProps) {
  return (
    <div className="px-5 md:px-0">
      <div className="flex flex-col gap-2">
        <h3 className="md:font-medium font-semibold text-[17px] md:text-[22px] text-black md:my-0  my-5 ">
          Password and Security
        </h3>
        <div className=" p-0">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}

export default PasswordSecurity;
