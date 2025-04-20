import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { LoadingScreen } from '../journal/components/loadingScreen/LoadingScreen'
import { JournalRouter } from '../journal/routes/JournalRouter'

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth)

  if(status === "checking"){
    return (
      <LoadingScreen />
    )
  }

  return (
    <Routes>
        <Route path='auth/*' element={<AuthRouter />}/>
        <Route path='/*' element={<JournalRouter />}/>
    </Routes>
  )
}
