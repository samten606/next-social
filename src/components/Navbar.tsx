'use client'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoading } from '@clerk/nextjs'
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className=' h-24 flex  items-center w-full justify-between'>
      {/* LEFT SECTION */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href='/' className='text-xl font-bold text-blue-800'>SAMSDEV</Link>
        </div>
        {/* MIDDLE SECTION */}
        <div className="hidden md:flex justify-between items-center w-[50%] text-sm text-slate-600">
          <div className="flex gap-6 ">
            <Link href="/" className='flex gap-2 items-center'>
            <Image 
            src="/home.png" 
            width={16} 
            height={16} 
            alt='' 
            className='w-4 h-4'
            />
            <span>Homepage</span>
            </Link>
          
            <Link href="/" className='flex gap-2 items-center'>
            <Image 
            src="/friends.png" 
            width={16} 
            height={16} 
            alt='' 
            className='w-4 h-4'/>
            <span>Friends</span>
            </Link>  
          
            <Link href="/" className='flex gap-2 items-center'>
            <Image 
            src="/stories.png" 
            width={16} 
            height={16} 
            alt='' 
            className='w-4 h-4'
            />
            <span>Stories</span>
            </Link>
          </div>
          <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded">
            <input type="text" placeholder='search...' className='bg-transparent outline-none'/>
            <Image src="/search.png" alt='search' width={14} height={14}/>
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">                   
            <ClerkLoading>
              <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
            </ClerkLoading>
            <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image src="/people.png" width={24} height={24} alt='people'/>
              </div>
              <div className="cursor-pointer">
                <Image src="/messages.png" width={20} height={20} alt='messages'/>
              </div>
              <div className="cursor-pointer">
                <Image src="/notifications.png" width={20} height={20} alt='notification'/>
              </div>
            </SignedIn>
            <UserButton/>
            <SignedOut>
              <div className="sm:hidden md:block flex gap-2 items-center text-sm">
                <Image src="/login.png" alt='' width={20} height={20}/>
                <Link href="/sign-in">Login/Register</Link>
              </div>
            </SignedOut>
            </ClerkLoaded>
            <MobileMenu/>
        </div>
    </div>
  )
}

export default Navbar