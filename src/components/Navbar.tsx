import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 '>
            {/* {SEARCH BAR} */}
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
                <Image src="/search.png" alt='' height={14} width={14} />
                <input type='text' placeholder='Seach...'  className='w-[200px] p-2 bg-transparent outline-none'/>
            </div>


            {/* ICONS */}

            <div className='flex items-center justify-end w-full gap-5 '>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <Image src="/message.png" alt='' width={20} height={20} />
                </div>

                <div className='relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <Image src="/announcement.png" alt='' width={20} height={20} />
                    <div className='absolute -top-3 -right-3 w-5 h-5  flex items-center justify-center bg-purple-400 text-white rounded-full text-xs'>2</div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-medium '>Muhammad Zohaib</span>
                    <span className='text-[10px] text-gray-500 text-right '>Admin</span>
                </div>

                <Image src={"/avatar.png"} alt='' width={36} height={36} className='rounded-full' />
            </div>

        </div>
    )
}

export default Navbar
