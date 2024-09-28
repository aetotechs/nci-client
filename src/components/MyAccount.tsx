import { Switch } from '@/components/ui/switch';
import { EditDialog } from '@/components/EditContactInformation';
import { ProfileProps } from '@/pages/profile';
function MyAccount({ user }: ProfileProps) {
  return (
    <div className=" px-3 ">
      <div>
        <h3 className="font-medium text-2xl text-black md:my-0 my-10">My Account</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-4">
        <div className="w-[300px] md:w-[407px] h-[180px]  rounded-[8px] border flex flex-col py-5 px-5 border-cardborder">
          <div>
            <h5 className="font-semibold text-[17px]">Contact Information</h5>
          </div>
          <div className="my-4 font-normal text-base text-black">
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-sm">{user?.email}</p>
          </div>
          <EditDialog user={user} />
        </div>
        <div className="w-[300px] md:w-[407px] h-[180px] rounded-[8px] border flex flex-col py-5 px-5 border-cardborder">
          <div>
            <h5 className="font-semibold text-[17px]">News Letters</h5>
          </div>
          <div className="flex  justify-between items-center my-4">
            <div>
              <p className="font-normal text-base text-textdark">Subscibe to our newsletter</p>
              <p className="font-normal text-[12px] text-inactive">
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
