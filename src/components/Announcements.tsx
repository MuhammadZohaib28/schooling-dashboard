import Image from 'next/image'
import React from 'react'

const Announcements = () => {
    const announcements = [
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


    ];

    return (
        <div>

            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Announcements</h1>
                <span className='text-sm text-gray-400'>View All</span>
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                {announcements.map(event => (
                    <div key={event.id} className='flex flex-col gap-2 p-5 rounded-md ring-1 ring-gray-200 odd:bg-lightskyblue even:bg-purplel'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>{event.title}</h1>
                            <span className='text-xs text-green-600 bg-white rounded-md p-1'>{event.time}</span>
                        </div>

                        <p className='text-sm mt-2 text-gray-400'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Announcements
