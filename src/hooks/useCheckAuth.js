import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FireBaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth)
    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged(FireBaseAuth, async(user)=>{
        if(!user) return dispatch (logout());
        console.log(user)
        const {uid,email,displayName,photoURL} =user;
        dispatch(login({uid,email,displayName,photoURL}));
        dispatch(startLoadingNotes())
      })
    }, [])

    return {
        status
    }
}
