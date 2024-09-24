import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    sales: 4000,
  },
  {
    name: 'Feb',
    sales: 3000,
  },
  {
    name: 'Mar',
    sales: 2000,
    
  },
  {
    name: 'June',
    sales: 2780,
  },
  {
    name: 'July',
    sales: 1890,
  },
  {
    name: 'Aug',
    sales: 2390,
    
  },
  {
    name: 'Sep',
    sales: 3490,
    
  },
];

export default class SalesGraph extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%', height: '210px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="sales" stroke="#DB9190" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
