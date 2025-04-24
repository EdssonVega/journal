import React from 'react'
import { GoStar } from "react-icons/go";
import "./initialScreenStyles.css"

export const InitialScreen = () => {
  return (
    <div className='initialScreenContainer'>
        <GoStar className='starIcon'/>
        <h1>Select or create an entry</h1>
    </div>
  )
}
