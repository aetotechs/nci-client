import { ChevronRight } from "lucide-react";

const customers = [
  {
    name: 'Alex Jack',
    email: 'jack@outlook.com',
    moneyPaid: '123'
  },
  {
    name: 'Alex Jack',
    email: 'jack@outlook.com',
    moneyPaid: '123'
  },
  {
    name: 'Alex Jack',
    email: 'jack@outlook.com',
    moneyPaid: '123'
  },
  {
    name: 'Alex Jack',
    email: 'jack@outlook.com',
    moneyPaid: '123'
  },
  {
    name: 'Alex Jack',
    email: 'jack@outlook.com',
    moneyPaid: '123'
  }
];

function RecentCustomers() {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-semibold text-base">Recent Customers</h3>
        <p className="text-primary flex items-center gap-1 text-sm">See All <span><ChevronRight className="h-4 w-4"/></span></p>
      </div>
      <div className="flex flex-col gap-3 my-2">
        {customers.map((customer, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <div className="font-semibold">{customer.name}</div>
              <div className="text-sm">{customer.email}</div>
            </div>
            <div className="font-medium text-[13px]">${customer.moneyPaid}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentCustomers;
