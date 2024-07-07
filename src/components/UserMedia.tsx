import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMedia = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-gray-100 p-2 w-full flex-wrap'>
        <div className="flex justify-between items-center gap-4">
        <span className='text-sm text-gray-600'>User Media</span>
        <Link href='/' className='text-sm text-blue-600'>See all</Link>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
        <Image src='https://images.pexels.com/photos/19486511/pexels-photo-19486511/free-photo-of-flowers-in-vases-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        <Image src='https://images.pexels.com/photos/26442528/pexels-photo-26442528/free-photo-of-horses-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        <Image src='https://images.pexels.com/photos/9116768/pexels-photo-9116768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        <Image src='https://images.pexels.com/photos/24491301/pexels-photo-24491301/free-photo-of-house-with-thatched-rooftop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        <Image src='https://images.pexels.com/photos/26902734/pexels-photo-26902734/free-photo-of-turc-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        <Image src='https://images.pexels.com/photos/23698640/pexels-photo-23698640/free-photo-of-a-wind-turbine-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        <Image src='https://images.pexels.com/photos/17513617/pexels-photo-17513617/free-photo-of-woman-standing-in-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        <Image src='https://images.pexels.com/photos/26442528/pexels-photo-26442528/free-photo-of-horses-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={56} height={52} className='w-16 h-13 rounded-md'/>
        </div>
       
    </div>
  )
}

export default UserMedia