import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Chirt.css'


const Chirt = () => {
    const data = useLoaderData()
    console.log(data.data);
    return (
        <div className='line-chart'>

            <LineChart width={500} height={400} data={data.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>

        </div >
    );
};

export default Chirt;