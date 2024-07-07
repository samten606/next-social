import React from 'react'
import Image from 'next/image'

const Stories = () => {
  return (
    <div className='p-4 bg-gray-200 rounded-lg shadow-md text-xs overflow-scroll'>
        <div className="flex gap-8 w-max">
            <div className="flex flex-col gap-2 items-center cursor-pointer">
                <Image 
                src='https://images.pexels.com/photos/19400189/pexels-photo-19400189.jpeg' 
                alt='' 
                width={80}
                height={80}
                className= 'w-20 h-20 rounded-full ring-2'
                />
                <span className='text-sm'>Sam</span>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer">
                <Image 
                src='https://images.pexels.com/photos/19400189/pexels-photo-19400189.jpeg' 
                alt='' 
                width={80}
                height={80}
                className= ' w-20 h-20 rounded-full ring-2'
                />
                <span className='text-sm'>Lee</span>
            </div>

            <div className="flex flex-col gap-2 items-center cursor-pointer">
                <Image 
                src='https://images.pexels.com/photos/19400189/pexels-photo-19400189.jpeg' 
                alt='' 
                width={80}
                height={80}
                className= 'w-20 h-20 rounded-full ring-2'
                />
                <span className='text-sm'>Sam</span>
            </div>

           <div className="flex flex-col gap-2 items-center cursor-pointer">
                <Image 
                src='https://images.pexels.com/photos/19400189/pexels-photo-19400189.jpeg' 
                alt='' 
                width={80}
                height={80}
                className= 'w-20 h-20 rounded-full ring-2'
                />
                <span className='text-sm'>Sam</span>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer">
                <Image 
                src='https://images.pexels.com/photos/19400189/pexels-photo-19400189.jpeg' 
                alt='' 
                width={80}
                height={80}
                className= 'w-20 h-20 rounded-full ring-2'
                />
                <span className='text-sm'>Sam</span>
            </div>
            </div> 
    </div>
  )
}

export default Stories