import React from 'react'
import ReactMarkdown from 'react-markdown';

export const WorkEx = (props) => {
  return(
    <div className='workExperience'>
      <div className='blockHeaders'> Experience </div>
      <ReactMarkdown source={props.experience} />
    </div>
  )
}

export default WorkEx;