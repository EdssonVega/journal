import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { BsExclamationCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import "./loginPageStyles.css";

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const {errorMessage, status} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(()=> status === "checking", [status])

  const {register, handleSubmit, formState:{errors}} = useForm()

  const onSubmitRegister = (data)=> {
    console.log(data)
    dispatch(startCreatingUserWithEmailPassword(data)) 
  }

  return (
    <div className="bgContainer">
      <div className="formContainer">
        <h1>Register an account</h1>
        <div className="labelAnimationContainer">
          <input {...register("displayName", {required:true})} className="inputAnimation" type="text" placeholder="" />
          <label className="labelAnimation" htmlFor="">
            Name
          </label>
        </div>
        {errors.displayName?.type === "required" && <p className='textError'>Insert a name</p>}

        <div className="labelAnimationContainer">
          <input {...register("email", {required:true})} className="inputAnimation" type="email" placeholder="" />
          <label className="labelAnimation" htmlFor="">
            Email
          </label>
        </div>
        {errors.email?.type === "required" && <p className='textError'>Insert your email</p>}

        <div className="labelAnimationContainer">
          <input {...register("password", {required:true})} className="inputAnimation" type="password" placeholder="" />
          <label className="labelAnimation" htmlFor="">
            Password
          </label>
        </div>
        {errors.password?.type === "required" && <p className='textError'>Insert your password</p>}
        
        {errorMessage && <div className="firebaseError"><BsExclamationCircle />{errorMessage}</div>}

        <div className="buttonsContainer">
          <button disabled={isCheckingAuthentication} onClick={handleSubmit(onSubmitRegister)}>CREATE ACCOUNT</button>
        </div>
        <p>Do you have an account already? <NavLink to={"/auth/login"}>log in</NavLink></p>
      </div>
    </div>
  );
};
