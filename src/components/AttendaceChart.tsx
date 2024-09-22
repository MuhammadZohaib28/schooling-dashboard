"use client";

import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Mon',
        present: 30,
        absent: 13,

    },
    {
        name: 'Tues',
        present: 45,
        absent: 21,

    },
    {
        name: 'Wed',
        present: 34,
        absent: 2,

    },
    {
        name: 'Thurs',
        present: 54,
        absent: 32,

    },
    {
        name: 'Friday',
        present: 34,
        absent: 12,

    },
];

const AttendaceChart = () => {
    return (
        <div className='bg-white rounded-lg h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendace</h1>
                <Image src={'/moreDark.png'} alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar legendType='circle' dataKey="present" fill="#FAE27C" radius={[10, 10, 0, 0]} />
                    <Bar legendType='circle' dataKey="absent" fill="#C3EBFA" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default AttendaceChart
