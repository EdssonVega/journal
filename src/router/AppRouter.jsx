import { onAuthStateChanged } from 'firebase/auth'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { FireBaseAuth } from '../firebase/config'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { LoadingScreen } from '../journal/components/loadingScreen/LoadingScreen'
import { JournalRouter } from '../journal/routes/JournalRouter'
import { login, logout } from '../store/auth/authSlice'

export const AppRouter = () => {

  const {status} = useCheckAuth()
  

  if(status === "checking"){
    return (
      <LoadingScreen />
    )
  }

  return (
    <Routes>
      {
        (status === "authenticated") 
        ? <Route path='/*' element={<JournalRouter />}/>
        :<Route path='auth/*' element={<AuthRouter />}/>
      }

      <Route path='/*' element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
