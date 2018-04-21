import React from 'react'

export const ProfileAndCompany = (props) => {
  return(
    <div className="profileAndCompany">
      {props.profile} @ {props.company}
    </div>
  )
}

export default ProfileAndCompany;