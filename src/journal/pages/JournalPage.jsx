import React from 'react'
import { InitialScreen } from '../components/initialScreen/InitialScreen'
import { Navbar } from '../components/navbar/Navbar'
import { SideBar } from '../components/sideBar/SideBar'
import { FaPlus } from "react-icons/fa";
import "./journalStyles.css"

export const ancho = 250

export const JournalPage = () => {


  return (
    <div className='journalContainer'>
      <SideBar />
      <div className='notesContainer' style={{ '--ancho-caja': `${ancho}px` }}>
        <Navbar />
        <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
        <InitialScreen />
        </div>
      </div>
      <button className='addNoteButton'>
        <FaPlus style={{ width: '60%', height: '60%'}}/>
      </button>
    </div>
  )
}
