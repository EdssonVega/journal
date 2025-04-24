import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../../store/journal/thunks'
import { ancho } from '../../pages/JournalPage'
import "./sideBarStyles.css"

export const SideBar = () => {

  const dispatch = useDispatch()
    const {displayName} = useSelector(state => state.auth)


  return (
    <div className='sideBarContainer' style={{ '--ancho-caja': `${ancho}px` }}>
        <div className='displayNameContainer' onClick={()=>dispatch(startNewNote())}>
            {displayName}
        </div>
    </div>
  )
}
