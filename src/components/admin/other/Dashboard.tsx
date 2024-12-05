import { GraphComponent } from './BarGraph';
import CoffeeBrands from '../../user/other/CoffeeBrands';
import RecentCustomers from './RecentCustomers';
import { StockTable } from '../tables/StockTable';
import { Badge } from '../../common/ui/badge';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/utils/style-libs/StyleUtils';
import { Button } from '@/components/common/ui/button';
import { Calendar } from '@/components/common/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const items = [
  {
    title: 'Total Coffee Listings',
    numberofusers: 123,
    date: '2 more than last month',
    percentage: 4
  },
  {
    title: 'Total Users',
    numberofusers: 123,
    date: '7 more than last month',
    percentage: 8
  },
  {
    title: 'Bags Ordered',
    numberofusers: 1540,
    date: '98 more than last month',
    percentage: 15
  },
  {
    title: 'Samples requsted',
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
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20)
  });
  return (
    <div className="md:mt-0 mt-24 pl-5 md:pl-0 md:px-6">
      <div className="flex justify-between items-center ">
        <h3 className="font-semibold text-[22px]">Dashboard</h3>
        <div className="">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={'outline'}
                className={cn(
                  'md:w-[220px] text-left font-normal  p-0 px-2 text-[13px] border-primary/30 flex items-center justify-between',
                  !date && 'text-muted-foreground'
                )}
              >
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(date.from, 'LLL dd, y')
                  )
                ) : (
                  <span>Pick a date</span>
                )}

                <ChevronDown className="h-4 w-4 justify-self-end " />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 my-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white border border-primary/30 rounded-[10px] md:h-[117px] py-4 px-3"
          >
            <div className="font-medium text-[11px] md:text-[12px] text-[#585962] leading-4 uppercase">
              {item.title}
            </div>
            <div className="flex justify-between items-center">
              <div className="font-bold text-[17px]">{item.numberofusers}</div>
              <div>
                <Badge
                  variant="outline"
                  className={`border-none w-[46px] h-[21px] rounded-[7px] font-normal justify-center ${
                    item.percentage < 0
                      ? 'text-[#f44336] bg-[#f443361f]'
                      : 'text-[#009a68] bg-[#009a681f]'
                  }`}
                >
                  {item.percentage > 0 ? `+${item.percentage}%` : `${item.percentage}%`}
                </Badge>
              </div>
            </div>
            <div className="text-[11px] font-medium text-[#80818a] ">{item.date}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-5 my-4 ">
        <div className="border border-primary/30 bg-white   md:w-[60vw] rounded-[10px]">
          <div className="flex justify-between px-10 py-5">
            <div className="">
              <h3 className="font-semibold text-base">Orders Over Time</h3>
            </div>
            <div>
              <Select>
                <SelectTrigger className="  border border-[#b9bbc6] outline-none rounded-[5px] text-[13px] w-[100px] h-[28px] ">
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
          <div className=" pr-10">
            <GraphComponent />
          </div>
        </div>
        <div className="border border-primary/30 bg-white overflow-hidden md:w-[40vw] max-h-min rounded-[10px]">
          <CoffeeBrands />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 my-4">
        <div className="border border-primary/30 bg-white px-10 py-4  md:w-[60vw] rounded-[10px]">
          <div>
            <h3 className="font-semibold text-base my-2">Stock Threshold</h3>
          </div>
          <StockTable coffeebrands={coffeebrands} />
        </div>
        <div className="border border-primary/30 bg-white overflow-hidden md:w-[40vw] rounded-[10px] p-4">
          <RecentCustomers />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
