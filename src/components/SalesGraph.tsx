import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Jan',
    sales: 100
  },
  {
    name: 'Feb',
    sales: 350
  },
  {
    name: 'Mar',
    sales: 150
  },
  {
    name: 'June',
    sales: 200
  },
  {
    name: 'July',
    sales: 280
  },
  {
    name: 'Aug',
    sales: 159
  },
  {
    name: 'Sep',
    sales: 500
  }
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

            <Line type="monotone" dataKey="sales" stroke="#DB9190" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
