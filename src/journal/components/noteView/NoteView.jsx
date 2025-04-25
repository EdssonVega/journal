import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../../store/journal/journalSlice";
import { startSaveNote } from "../../../store/journal/thunks";
import "./noteViewStyles.css";

export const NoteView = () => {
   const {active} = useSelector(state => state.journal)
   const dispatch = useDispatch()
   const {register, handleSubmit, reset,watch} = useForm({
    defaultValues:{
      title:active.title,
      body:active.body
    }
   })

  const date = new Date().toLocaleDateString("en-GB", {
    weekday: "long", // Friday
    day: "2-digit", // 20
    month: "long", // May
    year: "numeric", // 2022
  });

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }


  useEffect(() => {
    reset({
      title: active.title,
      body: active.body,
    });
  }, [active, reset]);
  

  const watchedFields = watch()
  
  useEffect(() => {
    dispatch(setActiveNote({
      ...active,
      ...watchedFields
    }))
  }, [watchedFields.body,watchedFields.title])
  

  return (
    <div className="noteContainer">
      <div className="dateSaveContainer">
        <h1>{date}</h1>
        <button onClick={onSaveNote}>
        <FaRegSave className="saveIcon"/>
        Save
        </button>
      </div>

      <div className="tittleContainer">
        <label htmlFor="">Title</label>
        <input type="text" {...register("title")}/>
      </div>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="What happened today?"
        {...register("body")}
      ></textarea>
    </div>
  );
};
