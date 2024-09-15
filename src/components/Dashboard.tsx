import { GraphComponent } from './BarGraph';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
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
    percentage: +15
  },
  {
    title: 'orders',
    numberofusers: 325,
    date: '21 less than last month',
    percentage: -10
  }
];

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between ">
        <h3 className="font-semibold text-[23px]">Dashboard</h3>
        <div>
          <Input type="date" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 my-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white border border-primary/30 rounded-[10px] h-[117px] py-4 px-2">
            <div className="font-medium text-sm leading-4 uppercase">{item.title}</div>
            <div className="flex justify-between items-center">
              <div className="font-bold">{item.numberofusers}</div>
              <div>
                <Badge variant="outline" className="w-[46px] h-[21px] rounded-[7px] justify-center">
                  {item.percentage}
                </Badge>
              </div>
            </div>
            <div className="text-[14px] font-medium text-inactive ">{item.date}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-10 my-6">
        <div className="border border-primary/30 bg-white px-10  md:w-[714px] rounded-[10px]">
          <div className="flex justify-between">
            <div>
              <h3>Orders Over Time</h3>
              <p>120</p>
            </div>
          </div>
          <GraphComponent />
        </div>
        <div className="border border-primary/30 bg-white  md:w-[416px] rounded-[10px]">
          <div className="flex justify-between">
            <div>
              <h3>Orders Over Time</h3>
              <p>120</p>
            </div>
          </div>
          <GraphComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
