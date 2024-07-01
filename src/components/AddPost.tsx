import Image from "next/image"

const AddPost = () => {
  return (
    <div className='p-4 items-center w-full bg-gray-200 rounded-lg shadow-md'>

        <div className="flex gap-6 items-center justify-center">
            <div className="flex-1 ">
            <Image 
                    src="https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
                    alt=''
                    width={40}
                    height={40}
                    className="rounded-full ring-2 w-10 h-10"
                    />
            </div>
            <div className="flex flex-col gap-4">
            <div className="flex gap-3">
            <textarea
                    placeholder="What's on your mind?" 
                    className="flex-1 rounded-lg p-2 items-center ">
                    </textarea >
                    <Image src="/emoji.png"
                alt=""
                width={16}
                height={16}
                className="flex w-5 h-5 cursor-pointer self-end"
                />
   
            </div>
            <div className="flex gap-4 mt-4 items-center flex-wrap">
            <div className="flex gap-1">
    <Image 
    src="/addimage.png"
    alt=""
    height={16}
    width={16}
    className="w-4 h-4"/>
    <span className="text-sm text-gray-500">Photo</span>
</div>
<div className="flex gap-1">
    <Image 
    src="/videos.png"
    alt=""
    height={16}
    width={16}
    className="w-4 h-4"/>
    <span className="text-sm text-gray-500">Video</span>
</div>
<div className="flex gap-1">
    <Image 
    src="/poll.png"
    alt=""
    height={16}
    width={16}
    className="w-4 h-4"/>
    <span className="text-sm text-gray-500">Poll</span>
</div>
<div className="flex gap-1">
    <Image 
    src="/events.png"
    alt=""
    height={16}
    width={16}
    className="w-4 h-4"/>
    <span className="text-sm text-gray-500">Event</span>
</div>
          
          
            </div>
            </div>
        </div>

        
    </div>
  )
}

export default AddPost