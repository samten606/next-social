import Stories from "@/components/Stories"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"


const Homepage = ({userId}:{userId?:String | null}) => {
  return (
    <div className='flex gap-6 pt-4'>
      
      <div className="hidden xl:block w-[20%]">
        <LeftMenu/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories/> 
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId='samssss'/>
      </div>
    </div>
  )
}

export default Homepage