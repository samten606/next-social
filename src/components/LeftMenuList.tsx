import Image from "next/image"


const LeftMenuList = () => {
  return (
    <div className="flex flex-col gap-8 bg-gray-200 shadow-md rounded-md p-2 w-full">
        <div className="flex gap-2 items-center">
            <Image src='/posts.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">My Posts</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/activity.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">Activity</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/events.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">Events</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/market.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">Market Place</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/albums.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">Album</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/videos.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">Videos</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/news.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">News</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/courses.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">Courses</span>
        </div>
        <div className="flex gap-2 items-center">
            <Image src='/settings.png' alt="" width={20} height={20}
            className="w-5 h-5"/>
            <span className="text-sm text-gray-500">Settings</span>
        </div>
    </div>
  )
}

export default LeftMenuList