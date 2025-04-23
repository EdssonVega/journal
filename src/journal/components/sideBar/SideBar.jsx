import React from 'react'
import { useSelector } from 'react-redux'
import { ancho } from '../navbar/Navbar'
import "./sideBarStyles.css"

export const SideBar = () => {

    const {displayName} = useSelector(status => status.auth)
  return (
    <div className='sideBarContainer' style={{ '--ancho-caja': `${ancho}px` }}>
        <div className='displayNameContainer'>
            {displayName}
        </div>
    </div>
  )
}
