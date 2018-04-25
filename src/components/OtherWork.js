import React from 'react'
import ReactMarkdown from 'react-markdown';

export const OtherWork = (props) => {
  return(
    <div className='otherWork'>
      <div className='blockHeaders'> Others - Talks/ Blogs/ Hackathons </div>
      <ReactMarkdown source={props.otherWork} />
    </div>
  )
}

export default OtherWork;