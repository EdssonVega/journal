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
        <input className='inputAnimation' type="email" placeholder='' />
        <label className='labelAnimation' htmlFor="">Email</label>

        </div>
        <div className='labelAnimationContainer'>
        <input className='inputAnimation' type="password" placeholder=''/>
        <label className='labelAnimation' htmlFor="">Password</label>

        </div>
        <div className='buttonsContainer'>
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
