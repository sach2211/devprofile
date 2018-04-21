import React from 'react'

export const Component = (props) => {
  return(
    <div className='profilePicContainer'>
      <img className='profilePic' src={props.src} />
    </div>
  )
}

export default Component