import Image from 'next/image'
import React from 'react'

const CoverPhoto = () => {
  return (
    <div className='flex flex-col gap-20 items-center  justify-center w-full'>
  <div className="w-full h-64 relative">
  <Image src='https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
        alt='' 
        fill
        className='object-cover'/>
               <Image src='https://images.pexels.com/photos/20852624/pexels-photo-20852624/free-photo-of-woman-with-bottles-in-village.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
        alt=''
        width={128}
        height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full">
        <span className='text-sm font-bold'>Elver Sylveston</span>
        <div className="flex items-center justify-center gap-12">
          <div className="flex flex-col gap-1 items-center">
            <span className='text-sm font-bold'>142</span>
            <span className='text-xs'>Posts</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className='text-sm font-bold'>1.2K</span>
            <span className='text-xs'>Followers</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className='text-sm font-bold'>1.4K</span>
            <span className='text-xs'>Followings</span>
          </div>
        </div>
        
        
        </div>
        
    </div>
  )
}

export default CoverPhoto