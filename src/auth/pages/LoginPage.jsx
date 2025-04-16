import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import "./loginPageStyles.css"

export const LoginPage = () => {

  const {status} = useSelector(state => state.auth)

  const isAuthenticating = useMemo(()=> status === "checking",[status])

   const dispatch = useDispatch()

  const {register, handleSubmit, formState:{errors}} = useForm()

  const onSubmitLogin = (data)=> {
    console.log(data)
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn())
  }
  return (
    <div className='bgContainer'>
      <div className='formContainer'>
        <h1>Login</h1>
        <div className='labelAnimationContainer'>
        <input {...register("email", {required:true})} className='inputAnimation' type="email" placeholder='' />
        <label className='labelAnimation' htmlFor="">Email</label>

        </div>
        {errors.email?.type === "required" && <p className='textError'>An email is required</p>}
        <div className='labelAnimationContainer'>
        <input {...register("password", {required:true})} className='inputAnimation' type="password" placeholder=''/>
        <label className='labelAnimation' htmlFor="">Password</label>

        </div>
        {errors.password?.type === "required" && <p className='textError'>Insert your password</p>}

        <div className='buttonsContainer'>
          <button disabled={isAuthenticating} onClick={handleSubmit(onSubmitLogin)}>
            LOGIN
          </button>
          <button disabled={isAuthenticating} onClick={onGoogleSignIn}>
          <FaGoogle />
            GOOGLE
          </button>
        </div>
        <NavLink to={"/auth/register"} >Create an account</NavLink>
      </div>
    </div>
  )
}
