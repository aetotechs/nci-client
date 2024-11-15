import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/common/ui/chart';

const chartData = [
  { month: 'Sep 2', orders: 50 },
  { month: 'Sep 3', orders: 45 },
  { month: 'Sep 4', orders: 5 },
  { month: 'Sep 5', orders: 25 },
  { month: 'Sep 6', orders: 42 },
  { month: 'Sep 7', orders: 22 },
  { month: 'Sep 8', orders: 30 }
];

const chartConfig = {
  orders: {
    label: 'orders',
    color: ' #DB9190'
  }
} satisfies ChartConfig;

export function GraphComponent() {
  return (
    <ChartContainer config={chartConfig} className="md:h-[250px]   w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis dataKey="month" tickLine={false} tickMargin={10} className="font-medium" />
        <YAxis interval={0} ticks={[0, 10, 20, 30, 40, 50]} className="font-medium" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="orders" fill="var(--color-orders)" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
