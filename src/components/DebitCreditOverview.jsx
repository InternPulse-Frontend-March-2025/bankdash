import React from 'react'
import CustomHeading from "./CustomHeading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
      day: 'Sat',
      credit: 8000,
      debit: 4000,
    },
    {
      day: 'Sun',
      credit: 6000,
      debit: 2500,
    },
    {
      day: 'Mon',
      credit: 4500,
      debit: 2000,
    },
    {
      day: 'Tue',
      credit: 3000,
      debit: 7500,
    },
    {
      day: 'Wed',
      credit: 7500,
      debit: 4800,
    },
    {
      day: 'Thu',
      credit: 2390,
      debit: 3800,
    },
    {
      day: 'Fri',
      credit: 7500,
      debit: 5000,
    },
  ];

// Custom Legend for the bar chart
const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-between items-center text-sm mb-2 capitalize">
        <div>
            <p className='text-[13px] text-[#718EBF]'><span className='text-[#333B69]'>$7,560</span> Debited & <span className='text-[#333B69]'>$5,420</span> Credited in this Week</p>
        </div>
        <div className='flex'>
            {payload.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center ml-4">
                <div
                className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-1"
                style={{ backgroundColor: entry.color }}
                />
                <span style={{ color: "#718EBF" }}>{entry.value}</span>
            </div>
            ))}
        </div>
      </div>
    );
  };

const DebitCreditOverview = ({ className = "" }) => {

  return (
    <div className={`${className} flex flex-col`}>
      <CustomHeading title="Debit and Credit Overview" />
      {/* <div className="w-full h-[calc(100%-30px)] max-w-full rounded-lg"> */}
      {/* Card container with responsive width and height */}
      <div className="bg-white rounded-xl shadow-lg p-4 w-full h-full">
        {/* Chart container with responsive dimensions */}
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 5,
                left: 0,
                bottom: 0,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" vertical={false} /> */}
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF", fontSize: 12 }}
              />
              {/* <YAxis
                domain={[0, 500]}
                axisLine={false}
                tickLine={false}
                tickCount={6}
                tick={{ fill: "#718EBF", fontSize: 12 }}
              /> */}
              <Tooltip />
              <Legend
                content={<CustomLegend />}
                verticalAlign="top"
                align="right"
              />
              <Bar
                dataKey="debit"
                fill="#1A16F3"
                radius={[4, 4, 4, 4]}
                barSize={10}
              />
              <Bar
                dataKey="credit"
                fill="#fcaa0b"
                radius={[4, 4, 4, 4]}
                barSize={10}
              />
              
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default DebitCreditOverview
