import React from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import "./notesSideBarStyles.css"

export const NotesSideBar = ({title,body,activeNote}) => {


    
  return (
    <div className='noteSideBarContainer' onClick={activeNote}>
        <FaRegBookmark className='bookmarkIcon'/>
        <div className='titleAndBodyContainer'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
  )
}
