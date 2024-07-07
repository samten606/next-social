import React from 'react'
import FriendRequest from './FriendRequest'
import Birthdays from './Birthdays'
import SponsoredAds from './SponsoredAds'
import UserInformation from './UserInformation'
import UserMedia from './UserMedia'

const RightMenu = ({userId}) => {
  return (
    <div className='flex  flex-col items-center  gap-6'>
      {userId?(<>
      <UserInformation/>
       <UserMedia/>
      </>):(null)}
      <><FriendRequest/>
      <Birthdays/>
      <SponsoredAds/>
      </>
      
  
      
    </div>
  )
}

export default RightMenu