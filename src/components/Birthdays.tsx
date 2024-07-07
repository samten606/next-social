import Image from 'next/image'
import React from 'react'

const Birthdays = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-gray-200 shadow-md  p-2 w-full'>
        <span className='text-sm text-gray-600'>Birthdays</span>
        <div className="flex gap-2 items-center">
        <Image src='https://images.pexels.com/photos/24604782/pexels-photo-24604782/free-photo-of-a-road-winding-through-the-mountains-with-snow-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' 
            width={20} height={20} 
            className='w-5 h-5 rounded-full object-cover'/>
        </div>
        <div className="flex justify-between items-center w-full">
            <span className='text-sm text-gray-600 text-bold'>Samten Wangdi</span>
            <button className='text-xs text-white rounded-md bg-blue-600 p-1'>Celebrate</button>
        </div>
        <div className="flex gap-3 items-center rounded-md shadow-sm bg-slate-100 p-4">
            <Image src='/gift.png' alt='' width={16} height={16} className='w-4 h-4'/>
            <div className="flex flex-col gap-1">
                <span className='text-xs font-bold text-gray-600'>Upcoming Birthdays</span>
                <p className='text-xs text-gray-600'>See other 10 upcoming birthdays</p>
            </div>
        </div>
        
    </div>
  )
}

export default Birthdays