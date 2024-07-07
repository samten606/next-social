'use client'
import React, { useState } from 'react'

const MobileMenu = () => {
  const[isopen, setIsOpen] = useState(false)
  return (
    <div className='md:hidden'>
      <div className="flex flex-col gap-1 " onClick={()=>setIsOpen(prev=>!prev)}>
      <div className={`w-6 h-1 bg-blue-800 rounded-sm ${isopen? "rotate-45":""} origin-left cursor-pointer ease-in-out duration-500`}> </div>
      <div className={`w-6 h-1 bg-blue-800 rounded-sm ${isopen? "opacity-0":""} cursor-pointer ease-in-out duration-500`}></div>
      <div className={`w-6 h-1 bg-blue-800 rounded-sm ${isopen? "-rotate-45": ""} origin-left cursor-pointer ease-in-out duration-500`}></div>
    </div>

    {isopen&&(
      <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col gap-8 font-medium text-xl items-center justify-center z-10'>
      <div className="">Home</div>
      <div className="">Stories</div>
      <div className="">Profiles</div>
      <div className="">Login</div>


    </div>
  )}

    </div>
  )
}

export default MobileMenu