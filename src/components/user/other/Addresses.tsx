import { AddAdressDialog } from '@/components/user/other/AddNewAddress';
import { EditAddressDialog } from './EditShipping';
import { ProfileProps } from '@/pages/user/Profile';
import { EditBillingAddressDialog } from './EditBilling';

const MyAddresses = [
  {
    title: 'Billing Address'
  },
  {
    title: 'Shipping Address'
  }
];

function Addresses({ user }: ProfileProps) {
  return (
    <div className="px-5 my-5 md:px-0 md:my-0">
      <div className="md:mb-2 mb-4">
        <h3 className="md:font-medium  font-semibold text-[17px] md:text-[22px]">Addresses</h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-5 md:gap-10">
        {MyAddresses.map((address, index) => (
          <div key={index} className="  border border-border rounded-[8px] pt-4 px-5 ">
            <div className="md:font-semibold md:text-[17px] text-[15px] font-medium ">
              Default {address.title}
            </div>

            <div className="flex flex-col text-sm  my-1">
              <span className="text-texthighlight font-normal md:font-medium text-sm md:text-[15px]">
                {user?.lastName} {user?.firstName}
              </span>
              <span className="md:font-medium font-normal text-sm md:text-[15px]">
                {user?.company}
              </span>
              <span>{user?.address.street}</span>
              <span>
                {user?.address.city} {user?.address.zip}
              </span>
              <span>{user?.address.country}</span>
              <span>
                Tel:<span className="text-texthighlight">{user?.workPhone}</span>
              </span>
            </div>
            {address.title === 'Shipping Address' ? (
              <EditAddressDialog />
            ) : (
              <EditBillingAddressDialog />
            )}
          </div>
        ))}
      </div>

      <div className="my-10">
        <h4 className="font-medium text-[17px] md:text-xl md:my-3">Additional Addresses</h4>
        <p className="my-2 mt- md:text-[15px] text-sm font-normal text-[#585962]">
          You have no other address entries here
        </p>
        <AddAdressDialog />
      </div>
    </div>
  );
}

export default Addresses;
