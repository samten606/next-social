import Image from "next/image"
import Link from "next/link"
import SingleFeed from "./SingleFeed"

const Feed = () => {
  return (
    <div className='flex flex-col gap-4 p-4 w-full bg-slate-200 rounded-md shadow-md'>
      
      <SingleFeed/>
      <SingleFeed/>
      <SingleFeed/>
      <SingleFeed/>
      <SingleFeed/>

    </div>
  )
}

export default Feed