import Image from "next/image"
import Link from "next/link"

const ActionPost = () => {
  return (
    <div className="flex gap-6  items-center justify-between">
    <div className=" flex gap-4">
        <div className="flex gap-4 rounded-xl w-max bg-amber-50  items-center p-2 text-xs">
        <Link href='/'>
        <Image src='/like.png' width={14} height={14} alt=''/>
        </Link>
        <span className='text-xs text-gray-400'>|</span>
        <span className='text-xs text-gray-600'>123</span>
        </div>
        <div className="flex gap-4 rounded-xl w-max bg-amber-50  items-center p-2 text-xs">
        <Link href='/'>
        <Image src='/comment.png' width={14} height={14} alt='' className=""/>
        </Link>
        <span className='text-xs text-gray-400'>|</span>
        <span className='text-xs text-gray-600'>123</span>
        </div>
    </div>
    
    <div className=" flex rounded-xl w-max bg-amber-50   items-center gap-4 p-2 text-xs">
        <Link href='/'>
        <Image src='/share.png' width={14} height={14} alt=''/>
        </Link>
        <span className='text-xs text-gray-400'>|</span>
        <span className='text-xs text-gray-600'>123</span>
    </div>
   
    </div>
  )
}

export default ActionPost