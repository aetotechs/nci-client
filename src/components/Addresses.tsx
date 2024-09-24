import { Button } from '@/components/ui/button';
import { AddAdressDialog } from '@/components/AddNewAddress';
import { EditAddressDialog } from './EditShipping';
import { ProfileProps } from '@/pages/profile';

const MyAddresses = [
  {
    name: 'Rahmah Nanyonga',
    companyName: 'LTA Farm Logistics ltd',
    tel: '0709742563',
    title: 'Billing Address',
    email: 'nanah@nanah.',
    street: 'Speke Road',
    country: 'Uganda',
    city: 'Enttebe',
    zipcode: '12345'
  },
  {
    name: 'Rahmah Nanyonga',
    companyName: 'LTA Farm Logistics ltd',
    title: 'Shipping Address',
    tel: '0709742563',
    email: 'nanah@nanah.',
    street: 'Speke Road',
    country: 'Uganda',
    city: 'Enttebe',
    zipcode: '12345'
  }
];

function Addresses({ user }: ProfileProps) {
  return (
    <div className="px-5 my-5 md:px-0 md:my-0">
      <div className="mb-4">
        <h3 className="font-medium text-xl">Addresses</h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10">
        {MyAddresses.map((address, index) => (
          <div
            key={index}
            className="md:w-[407px] h-[290px] border border-border rounded-[8px] pt-4 px-5 "
          >
            <div className="font-semibold text-[17px] ">Default {address.title}</div>

            <div className="flex flex-col gap-2 my-2">
              <span className="text-texthighlight">{address.name}</span>
              <span>{address.companyName}</span>
              <span>{address.street}</span>
              <span>
                {address.city},{address.zipcode}
              </span>
              <span>{address.country}</span>
              <span>
                Tel:<span className="text-texthighlight">{address.tel}</span>
              </span>
            </div>
            <EditAddressDialog />
          </div>
        ))}
      </div>

      <div className="my-10">
        <h4 className="font-medium text-xl my-3">Additional Addresses</h4>
        <p className="my-2 text-base font-normal text-inactive">
          You have no other address entries here
        </p>
        <AddAdressDialog />
      </div>
    </div>
  );
}

export default Addresses;
