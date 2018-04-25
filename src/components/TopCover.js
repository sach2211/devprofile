import React from 'react'

export const TopCover = (props) => {
  return(
    <div className='coverPicContainer'>
      <img src={props.src} className='coverPic'/>
    </div>
  )
}

export default TopCover;
