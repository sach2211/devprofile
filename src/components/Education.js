import React from 'react'
import ReactMarkdown from 'react-markdown';

export const Education = (props) => {
  return(
    <div className='educationDetails'>
      <div className='blockHeaders'> Education </div>
      <ReactMarkdown source={props.education} />
    </div>
  )
}

export default Education;