import React from 'react'
import "./navbarStyles.css"
import { IoIosLogOut } from "react-icons/io";

export const ancho = 250

export const Navbar = () => {

    const onLogOut = () => {
        
    }

  return (
    <div className='navbarContainer'  style={{ '--ancho-caja': `${ancho}px` }}>
        <h1>Journal App</h1>
        <button onClick={onLogOut}>
            <IoIosLogOut className='logoutIcon'/>
        </button>
    </div>
  )
}
