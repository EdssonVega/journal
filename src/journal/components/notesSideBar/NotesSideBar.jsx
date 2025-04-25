import React from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import "./notesSideBarStyles.css"

export const NotesSideBar = ({title,body,activeNote,id}) => {

  const {active} = useSelector(state => state.journal)

    
  return (
    <button className={active?.id === id ? "noteSideBarContainerActive" : "noteSideBarContainer"} onClick={activeNote}>
        <FaRegBookmark className='bookmarkIcon'/>
        <div className='titleAndBodyContainer'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </button>
  )
}
