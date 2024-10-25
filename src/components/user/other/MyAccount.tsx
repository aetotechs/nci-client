import { Switch } from '@/components/common/ui/switch';
import { EditDialog } from '@/components/user/other/EditContactInformation';
import { ProfileProps } from '@/pages/user/profile';
function MyAccount({ user }: ProfileProps) {
  return (
    <div className=" md:px-3 px-5 ">
      <div>
        <h3 className="md:font-medium text-[17px] font-semibold md:text-[22px] text-black md:my-0 my-5">
          My Account
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-2">
        <div className=" md:w-[407px] md:h-[180px]  rounded-[8px] border flex flex-col pb-4 pt-3  md:py-5 px-5 border-cardborder">
          <div>
            <h5 className="md:font-semibold font-medium text-[15px] md:text-[17px]">
              Contact Information
            </h5>
          </div>
          <div className="mt-1 mb-5 font-normal text-sm md:text-base text-black">
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-sm">{user?.email}</p>
          </div>
          <EditDialog user={user} />
        </div>
        <div className=" md:w-[407px] md:h-[180px] rounded-[8px] border flex flex-col py-5 px-5 border-cardborder">
          <div>
            <h5 className="md:font-semibold text-[15px] font-medium md:text-[17px]">
              News Letters
            </h5>
          </div>
          <div className="flex  justify-between items-center my-1">
            <div>
              <p className="font-normal md:text-base text-sm text-textdark">
                Subscribe to our newsletter
              </p>
              <p className="font-normal text-[12px]  text-[#616161]">
                Get the latest deals and updates
              </p>
            </div>
            <div>
              <Switch className="bg-primary w-11 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
