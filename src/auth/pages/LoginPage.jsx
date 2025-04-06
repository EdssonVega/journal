import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./loginPageStyles.css"

export const LoginPage = () => {
  return (
    <div className='bgContainer'>
      <div className='formContainer'>
        <h1>Login</h1>
        <div className='labelAnimationContainer'>
        <label htmlFor="">Email</label>
        <input type="email" />

        </div>
        <div className='labelAnimationContainer'>
        <label htmlFor="">Password</label>
        <input type="password" />

        </div>
        <div>
          <button>
            LOGIN
          </button>
          <button>
          <FaGoogle />
            GOOGLE
          </button>
        </div>
        <NavLink >Crear una cuenta</NavLink>
      </div>
    </div>
  )
}
