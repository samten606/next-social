import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SponsoredAds = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-gray-200 shadow-md  p-2 w-full'>
        <div className="flex justify-between gap-2 items-center">
            <span className='text-xs text-gray-600'>Sponsored Ads</span>
            <Image src='/more.png'width={12} height={12} alt=''/>
        </div>
        <div className="w-full h-40 relative">
            <Image src='https://images.pexels.com/photos/26632621/pexels-photo-26632621/free-photo-of-a-lone-tree-in-the-desert-with-a-red-sand-dune-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className='rounded-md shadow-md object-cover'/>
        </div>
        <div className="flex gap-2 items-center">
        <Image src='https://images.pexels.com/photos/26632621/pexels-photo-26632621/free-photo-of-a-lone-tree-in-the-desert-with-a-red-sand-dune-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' 
        width={16} 
        height={16}
        className='h-4 w-4'/>
        <Link href='/' className='text-sm text-blue-600'>BigChef Lounge</Link>
        </div>
        <p className='text-sm text-gray-600 items-center justify-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deserunt nihil eius ex tempore beatae inventore dolorem odit qui non? Aliquid ex provident illo voluptatum accusantium quas praesentium doloremque similique.</p>
        <button className='p-1 bg-slate-100 rounded-md text-sm'>Learn more</button>
    </div>
  )
}

export default SponsoredAds