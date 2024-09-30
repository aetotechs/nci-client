import { GraphComponent } from './BarGraph';
import CoffeeBrands from './CoffeeBrands';
import RecentCustomers from './RecentCustomers';
import { StockTable } from './tables/StockTable';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const items = [
  {
    title: 'Total Coffee Listings',
    numberofusers: 123,
    date: '2 morethan last month',
    percentage: 4
  },
  {
    title: 'Total Coffee Listings',
    numberofusers: 123,
    date: '7 morethan last month',
    percentage: +8
  },
  {
    title: 'TOTAL users',
    numberofusers: 1540,
    date: '98 morethan last month',
    percentage: 15
  },
  {
    title: 'orders',
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
function Dashboard() {
  return (
    <div className="md:mt-4 mt-24 pl-5 md:pl-0 md:px-6">
      <div className="flex justify-between ">
        <h3 className="font-semibold text-[23px]">Dashboard</h3>
        <div>
          <Input type="date" />
        </div>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 my-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white border border-primary/30 rounded-[10px] md:h-[117px] py-4 px-2"
          >
            <div className="font-medium text-[11px] md:text-sm leading-4 uppercase">
              {item.title}
            </div>
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
      <div className="flex flex-col gap-5 md:flex-row md:gap-5 my-6">
        <div className="border border-primary/30 bg-white   md:w-[714px] rounded-[10px]">
          <div className="flex justify-between px-10 py-3">
            <div className="">
              <h3 className="font-semibold text-base">Orders Over Time</h3>
              <p className="font-bold text-xl">120</p>
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
          <div className="py-10 pr-10">
            <GraphComponent />
          </div>
        </div>
        <div className="border border-primary/30 bg-white overflow-hidden md:w-[416px] rounded-[10px]">
          <CoffeeBrands />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 my-6">
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

export default Dashboard;
