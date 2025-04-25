import React from 'react'
import { InitialScreen } from '../components/initialScreen/InitialScreen'
import { Navbar } from '../components/navbar/Navbar'
import { SideBar } from '../components/sideBar/SideBar'
import { FaPlus } from "react-icons/fa";
import "./journalStyles.css"
import { NoteView } from '../components/noteView/NoteView';
import { useSelector } from 'react-redux';

export const ancho = 250

export const JournalPage = () => {
  const {active} = useSelector(state => state.journal)

  return (
    <div className='journalContainer'>
      <SideBar />
      <div className='notesContainer' style={{ '--ancho-caja': `${ancho}px` }}>
        <Navbar />
        <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
        {
          active === null ?
          <InitialScreen />:
          <NoteView />
        }
        </div>
      </div>
      <button className='addNoteButton'>
        <FaPlus style={{ width: '60%', height: '60%'}}/>
      </button>
    </div>
  )
}
