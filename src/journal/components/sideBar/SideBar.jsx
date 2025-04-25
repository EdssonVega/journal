import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../../store/journal/journalSlice'
import { startNewNote } from '../../../store/journal/thunks'
import { ancho } from '../../pages/JournalPage'
import { NotesSideBar } from '../notesSideBar/NotesSideBar'

import "./sideBarStyles.css"

export const SideBar = () => {

  const dispatch = useDispatch()
    const {displayName} = useSelector(state => state.auth)
    const {notes} = useSelector(state => state.journal)

    const onActiveNote = (id) => {
      dispatch(setActiveNote(notes.find(note => note.id === id)))
    }

  return (
    <div className='sideBarContainer' style={{ '--ancho-caja': `${ancho}px` }}>
        <div className='displayNameContainer'>
            {displayName}
        </div>
        <div>
          {
            notes.map((note)=>(
              <NotesSideBar title={note.title} body={note.body} activeNote={() => onActiveNote(note.id)} />
            ))
          }
        </div>
        
    </div>
  )
}
