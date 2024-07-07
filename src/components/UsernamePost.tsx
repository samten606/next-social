import Image from "next/image"

const UsernamePost = () => {
  return (
    <div className='flex gap-4 flex-1 justify-center'>
     
      <Image src='https://images.pexels.com/photos/26836540/pexels-photo-26836540/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' 
        alt='' width={32} height={32} className='w-8 h-8 rounded-full object-cover' />
            <div className="flex flex-col gap-2 justify-between mt-2 flex-1">
            <span className="text-sm font-bold">Samten Wangdi</span>
            <p className="text-sm text-gray-500">Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it.</p>
            </div>
    
        <div className="flex text-sm font-bold">
        ....
        </div>

    </div>
  )
}

export default UsernamePost