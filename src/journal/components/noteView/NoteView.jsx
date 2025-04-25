import React from "react";
import { FaRegSave } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./noteViewStyles.css";

export const NoteView = () => {
   const {active} = useSelector(state => state.journal)

  const date = new Date().toLocaleDateString("en-GB", {
    weekday: "long", // Friday
    day: "2-digit", // 20
    month: "long", // May
    year: "numeric", // 2022
  });



  return (
    <div className="noteContainer">
      <div className="dateSaveContainer">
        <h1>{date}</h1>
        <button>
        <FaRegSave className="saveIcon"/>
        Save
        </button>
      </div>

      <div className="tittleContainer">
        <label htmlFor="">Title</label>
        <input type="text" value={active.title}/>
      </div>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="What happened today?"
        value={active.body}
      ></textarea>
    </div>
  );
};
