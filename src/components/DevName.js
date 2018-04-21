import React from 'react'

export const Name = (props) => {
  return(
    <div className="devName">
      {props.name || 'Anonymous Dev'}
    </div>
  )
}

export default Name;