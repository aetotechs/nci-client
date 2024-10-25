import { DownloadForm } from '@/components/user/forms/DownloadDataForm';
import { DeleteConscent } from '@/components/common/forms/DeleteConscent';
import { ProfileProps } from '@/pages/user/profile';

function Privacy({ user }: ProfileProps) {
  return (
    <div className="md:w-[858px] px-5 ">
      <div>
        <h3 className="md:font-medium text-[17px] font-semibold md:text-[22px] text-black md:my-0 my-5">
          Privacy Settings
        </h3>
      </div>
      <div>
        <h5 className="font-semibold text-[15px] md:text-[17px] md:my-1">Download Personal Data</h5>
        <p className="text-sm">
          Here you can download a copy of your personal data which we store for your account in CSV
          format.
        </p>
        <div className="md:w-[391px]">
          <DownloadForm />
        </div>
      </div>
      <div>
        <h5 className="md:text-[17px] text-[15px] font-semibold mt-6 md:mt-5 md:my-1">
          Delete Account
        </h5>
        <p className="text-sm  md:mb-1">
          Request to remove your account, together with all your personal data, will be processed by
          our staff. Deleting your account will remove all the purchase history, discounts, orders,
          invoices and all other information that might be related to your account or your
          purchases.
          <br />
          All your orders and similar information will be lost. You will not be able to restore
          access to your account after we approve your removal request.
        </p>
        <div className="md:w-[391px]">
          <DeleteConscent />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
