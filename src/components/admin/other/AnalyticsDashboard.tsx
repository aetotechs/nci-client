import { Download } from 'lucide-react';
import RecentCustomers from './RecentCustomers';
import SalesGraph from './SalesGraph';
import { StockTable } from '../tables/StockTable';
import { Badge } from '../../common/ui/badge';
import { Button } from '../../common/ui/button';
import { Input } from '../../common/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';

import { AdminOrdersTable } from '../tables/AdminOrdersTable';

const orders = [
  {
    id: '1',
    orderDate: 'Aug 24,2024',
    status: 'Shipped',
    item: 'Endiro',
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '2',
    orderDate: 'Aug 24,2024',
    status: 'Cancelled',
    item: 'Endiro',
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '3',
    orderDate: 'Aug 24,2024',
    status: 'Processing',
    item: 'Endiro',
    customer: 'John Doe',
    revenue: 100
  }
];

const items = [
  {
    title: 'TOTAL SALES',
    numberofusers: '$ 45000',
    date: '2 morethan last month',
    percentage: 4
  },
  {
    title: 'TOTAL ORDERS',
    numberofusers: 123,
    date: '7 morethan last month',
    percentage: 8
  },
  {
    title: 'TOTAL UsERS',
    numberofusers: 1540,
    date: '98 morethan last month',
    percentage: 15
  },
  {
    title: 'ORDERS LAST MONTH',
    numberofusers: 325,
    date: '21 less than last month',
    percentage: -10
  }
];
const coffeebrands = [
  {
    name: 'Ethiopian Yirgacheffe',
    samples: 10,
    bags: 0
  },
  {
    name: 'Colombian Supremo',
    samples: 20,
    bags: 10
  },
  {
    name: 'Guatemalan Antigua',
    samples: 0,
    bags: 10
  },
  {
    name: 'Kenyan AA',
    samples: 0,
    bags: 0
  }
];
function AnalyticsDashboard() {
  return (
    <div className="md:mt-4 mt-24 ">
      <div className="flex flex-col md:flex-row gap-5 justify-between ">
        <h3 className="font-semibold text-[23px] leading-5">Analytics</h3>
        <div className="flex items-center gap-3">
          <Button className="items-center gap-2 grow">
            <span>
              <Download className="h-4 w-4" />
            </span>
            Export Report
          </Button>
          <Input type="date" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white border border-primary/30 rounded-[10px] h-[117px] py-4 px-2"
          >
            <div className="font-medium text-sm leading-4 uppercase">{item.title}</div>
            <div className="flex justify-between items-center">
              <div className="font-bold">{item.numberofusers}</div>
              <div>
                <Badge
                  variant="outline"
                  className={`border-none w-[46px] h-[21px] rounded-[7px] justify-center ${
                    item.percentage < 0
                      ? 'bg-destructive text-red-400'
                      : 'bg-Availablebackground text-Availabletext'
                  }`}
                >
                  {item.percentage}%
                </Badge>
              </div>
            </div>
            <div className="text-[14px] font-medium text-inactive ">{item.date}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-5 my-6">
        <div className="border border-primary/30 bg-white   lg:w-[47vw] lg:max-h-[301px] rounded-[10px]">
          <div className="flex justify-between px-10 py-3">
            <div className="">
              <h3 className="font-semibold text-base">Sales Overview</h3>
            </div>
            <div>
              <Select>
                <SelectTrigger className="  border border-selectborder outline-none rounded-[5px] w-[100px] h-[33px] ">
                  <SelectValue placeholder="7 days" className="p-5 text-base font-bold " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7 days">7 days </SelectItem>
                  <SelectItem value="30 days">30 days</SelectItem>
                  <SelectItem value="6 months">6 months</SelectItem>
                  <SelectItem value="12 months">12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="pb-10 py-5 pr-10">
            <SalesGraph />
          </div>
        </div>
        <div className="border border-primary/30 bg-white lg:w-[60vw] px-5  overflow-y-hidden lg:max-h-[301px] rounded-[10px]">
          <div className="flex justify-between  py-3">
            <div className="">
              <h3 className="font-semibold text-base">Current Orders</h3>
            </div>
            <div>
              <Button className="items-center gap-3 rounded-[8px] h-8">
                <span>
                  <Download className="h-4 w-4" />
                </span>
                Export
              </Button>
            </div>
          </div>
          <div className="pb-10  ">
            <AdminOrdersTable orders={orders} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 my-6">
        <div className="border border-primary/30 bg-white px-10 py-4  md:w-[714px] rounded-[10px]">
          <div>
            <h3 className="font-semibold text-base my-2">Stock Threshold</h3>
          </div>
          <StockTable coffeebrands={coffeebrands} />
        </div>
        <div className="border border-primary/30 bg-white overflow-hidden md:w-[416px] rounded-[10px] p-4">
          <RecentCustomers />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
