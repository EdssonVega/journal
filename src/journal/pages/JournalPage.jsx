import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { SideBar } from '../components/sideBar/SideBar'
import "./journalStyles.css"

export const JournalPage = () => {
  return (
    <div className='journalContainer'>
      <SideBar />
      <Navbar />
    </div>
  )
}
