import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewNote(true))
        const {uid} = getState().auth;
        const newNote ={
            title:"",
            body:"",
            date:new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes` ));
        const setDocResp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id

        dispatch(addNewEmptyNote( newNote))
        dispatch(setActiveNote(newNote))
    }
}


export const startLoadingNotes =  () => {
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;
        if(!uid) throw new Error("the user UID doesnt exists")

        const notes = await loadNotes( uid );

        dispatch(setNotes(notes))
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const {uid} = getState().auth;
        const {active} = getState().journal;

        const noteToFirestore = {...active};
        delete noteToFirestore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`)
        await setDoc(docRef, noteToFirestore, {merge:true});

        dispatch(updateNote(active))
    }
}