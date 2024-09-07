import { DownloadForm } from '@/components/forms/DownloadDataForm';
import { DeleteConscent } from '@/components/forms/DeleteConscent';

function Privacy() {
  return (
    <div className="md:w-[858px] px-5 w-[90%]">
      <div>
        <h3 className="font-medium text-xl my-4 md:my-0">Privacy Settings</h3>
      </div>
      <div>
        <h5 className="font-semibold text-[17px] md:my-3">Download Personal Data</h5>
        <p>
          Here you can download a copy of your personal data which we store for your account in CSV
          format.
        </p>
        <div className="md:w-[391px]">
          <DownloadForm />
        </div>
      </div>
      <div>
        <h5 className="text-[17px] font-semibold my-4 md:my-3">Delete Account</h5>
        <p className="text-sm">
          Request to remove your account, together with all your personal data, will be processed by
          our staff.Deleting your account will remove all the purchase history, discounts, orders,
          invoices and all other information that might be related to your account or your
          purchases.All your orders and similar information will be lost.You will not be able to
          restore access to your account after we approve your removal request.
        </p>
        <div className="md:w-[391px]">
          <DeleteConscent />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
