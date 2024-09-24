import { ProfileProps } from '@/pages/profile';
import { ChangePasswordForm } from './forms/ChangePasswordForm';

function PasswordSecurity({ user }: ProfileProps) {
  return (
    <div className="px-5 md:px-0">
      <div>
        <h3 className="font-medium text-2xl text-black md:my-0 my-10">Password and Security</h3>
        <div>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}

export default PasswordSecurity;
