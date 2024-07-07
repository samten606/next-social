import React from 'react'
import Image from 'next/image'

const CommentPost = () => {
  return (
    <div className='flex gap-6 flex-1 items-center justify-between'>
        <div className="">
<Image src='https://images.pexels.com/photos/26836540/pexels-photo-26836540/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' 
        alt='' width={24} height={24} className='w-6 h-6 rounded-full' />
        </div>
        
        <div className=" flex flex-1 rounded-xl px-4 py-2 bg-amber-50 justify-between items-center text-sm w-full">
            <input type="text" placeholder='Write a comment..' className='bg-transparent outline-none'/>
            <Image src='/emoji.png' alt='emoji' width={16} height={16} className='w-4 h-4'/>
        </div>
    </div>
  )
}

export default CommentPost