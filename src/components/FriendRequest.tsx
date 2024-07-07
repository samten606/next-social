import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequest = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-gray-200 shadow-md  p-2 w-full'>
        <div className="flex justify-between ">
            <span className='text-sm text-gray-600'>Friend Requests</span>
            <Link href='/' className='text-sm text-blue-600'>See all</Link>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='https://images.pexels.com/photos/24604782/pexels-photo-24604782/free-photo-of-a-road-winding-through-the-mountains-with-snow-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' 
            width={20} height={20} 
            className='w-5 h-5 rounded-full object-cover'/>
            <div className="flex gap-4 justify-between items-center w-full">
                <span className='font-bold text-xs'>Samten Wangdi</span>
                <div className="flex gap-2 items-center flex-end">
                <Image src='/accept.png' alt='' 
            width={12} height={12} />
            <Image src='/reject.png' alt='' 
            width={12} height={12} />
                </div>

            </div>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='https://images.pexels.com/photos/24604782/pexels-photo-24604782/free-photo-of-a-road-winding-through-the-mountains-with-snow-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' 
            width={20} height={20} 
            className='w-5 h-5 rounded-full object-cover'/>
            <div className="flex gap-4 justify-between items-center w-full">
                <span className='font-bold text-xs'>Yamuna Lee</span>
                <div className="flex gap-2 items-center flex-end">
                <Image src='/accept.png' alt='' 
            width={12} height={12} />
            <Image src='/reject.png' alt='' 
            width={12} height={12} />
                </div>

            </div>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='https://images.pexels.com/photos/24604782/pexels-photo-24604782/free-photo-of-a-road-winding-through-the-mountains-with-snow-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' 
            width={20} height={20} 
            className='w-5 h-5 rounded-full object-cover'/>
            <div className="flex gap-4 justify-between items-center w-full">
                <span className='font-bold text-xs'>James Bond</span>
                <div className="flex gap-2 items-center flex-end">
                <Image src='/accept.png' alt='' 
            width={12} height={12} />
            <Image src='/reject.png' alt='' 
            width={12} height={12} />
                </div>

            </div>
        </div>
        </div>
  )
}

export default FriendRequest