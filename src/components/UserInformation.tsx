import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInformation = () => {
  return (
    <div className='flex flex-col gap-4 bg-slate-100 rounded-md p-2 w-full'>
        <div className="flex items-center justify-between gap-2">
            <span className='text-sm text-gray-500'>User Information</span>
            <Link href='/' className='text-sm text-blue-600'>See all</Link>
        </div>
        <div className="flex items-center gap-2">
            <span className='text-sm font-bold'>Elva Weaver</span>
            <span className='text-xs text-gray-400'>@samsdev</span>
        </div>
        <div className="flex gap-1 items-center">
        <p className='text-xs text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quis rem minima consectetur obcaecati a magnam aliquam, incidunt quasi corporis facilis temporibus qui exercitationem! Impedit ducimus sapiente illum repellat dicta.</p>
        <Image src='/emoji.png' alt='' width={12} height={12} className='w-3 h-3 self-end'/>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/map.png'width={16} height={16} className='w-4 h-4' alt=''/>
            <span className='text-sm text-gray-500'>Living in <b>Australia</b></span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/school.png'width={16} height={16} className='w-4 h-4' alt=''/>
            <span className='text-sm text-gray-500'>Went to <b>Curint University</b></span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/work.png'width={16} height={16} className='w-3 h-3' alt=''/>
            <span className='text-sm text-gray-500'>Works at <b>Qld Gov</b></span>
        </div>
        <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
            <Image src='/link.png'width={16} height={16} className='w-4 h-4' alt=''/>
            <Link href='/' className='text-sm text-blue-600'>samsdev</Link>
            </div>
            <div className="flex gap-2 items-center">
            <Image src='/date.png'width={16} height={16} className='w-4 h-4' alt=''/>
            <span className='text-sm text-gray-500'>Joine January 2024</span>
            </div>
        </div>
        <button className='p-2 rounded-md bg-blue-600 text-white text-sm items-center'>Following</button>
        <span className='text-sm text-red-500 self-end'>Block User</span>
    </div>
  )
}

export default UserInformation