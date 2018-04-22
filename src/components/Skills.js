import React from 'react'
import ReactMarkdown from 'react-markdown';

export const Skills = (props) => {
  return(
    <div className='skillDetails'>
      <div className='blockHeaders'> Skills </div>
      <ReactMarkdown source={props.skills} />
    </div>
  )
}

export default Skills;