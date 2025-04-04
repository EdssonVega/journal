import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { JournalRouter } from '../journal/routes/JournalRouter'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='auth/*' element={<AuthRouter />}/>
        <Route path='/*' element={<JournalRouter />}/>
    </Routes>
  )
}
