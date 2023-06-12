import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TopicContext } from './Root';


const Statistics = () => {
    const statistics =useContext(TopicContext);
    const StatisticsData = statistics.data;
    console.log(StatisticsData);

 

    return (
       <div className='chart'>
            <h2 className='text-xl font-semibold text-center md:text-3xl mt-14'>Statistics Of Total Questions</h2>
            
             <div className='flex items-center justify-center'>
                <LineChart width={400} height={400} data={StatisticsData} margin={{ top: 50, bottom: 5, }}>
                    
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" activeDot={{ r: 8 }}/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                </LineChart>
             </div>
       </div>
    );
};

export default Statistics;