
"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Meetup with Sir Ali",
        time: "12:00PM - 1:30PM",
        description: "Will discuss the about school's furniture."
    },
    {
        id: 2,
        title: "Silver Jubilee Preparations",
        time: "10:00AM - 12:00PM",
        description: "Will discuss the about school's Silver Jubily function."
    },
    {
        id: 3,
        title: "Meetup with Sir Ali",
        time: "12:00PM - 1:30PM",
        description: "Will discuss the about school's furniture."
    },


]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className=' bg-white p-4 rounded-md '>
            <Calendar onChange={onChange} value={value} />

            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-bold'>Events</h1>
                <Image src={'/moreDark.png'} alt='' width={20} height={20} />
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                {events.map(event => (
                    <div key={event.id} className='flex flex-col gap-2 p-5 rounded-md ring-1 ring-gray-200 border-t-4 odd:border-t-skyblue even:border-t-purple'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>{event.title}</h1>
                            <span className='text-xs text-gray-400'>{event.time}</span>
                        </div>

                        <p className='text-sm mt-2 text-gray-400'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar
