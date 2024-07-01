import Image from "next/image"
import Link from "next/link"

const Feed = () => {
  return (
    <div className='p-4 w-full bg-slate-200 rounded-md'>
      <div className="flex flex-col gap-4">
        <div className="flex  g-4 justify-between">
      <div className="flex gap-2 ">
      <Image 
      src="https://images.pexels.com/photos/25642779/pexels-photo-25642779/free-photo-of-maidens-tower-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
      alt="user" 
      width={24} 
      height={24}
      className="rounded-full ring-2 w-6 h-6"
      />
      <span className="text-sm text-gray-600">Sam Lee</span>
      </div>
          <Link href='/' className="text-sm text-gray-600">....</Link> 
        </div>
        <Image
        src='https://images.pexels.com/photos/20782542/pexels-photo-20782542/free-photo-of-green-village-landscape-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
        alt="feedpic"
        width={600}
        height={600}
        className="w-150 h-150 rounded-lg border-none"
        />  
        <span className="text-sm text-gray-600 justify-center">
        Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence
        </span>

      </div>

    </div>
  )
}

export default Feed