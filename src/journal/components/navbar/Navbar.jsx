import React from 'react'
import "./navbarStyles.css"
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../store/auth/thunks';


export const Navbar = () => {
    const dispatch = useDispatch()

    const onLogOut = () => {
        dispatch(startLogout())
    }

  return (
    <div className='navbarContainer'  >
        <h1>Journal App</h1>
        <button onClick={onLogOut}>
            <IoIosLogOut className='logoutIcon'/>
        </button>
    </div>
  )
}
