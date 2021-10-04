import React, {useState, useEffect} from 'react';
import { getNotes } from "../../Services/Notes";

import "./Notes.scss"

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [noteIndex, setNoteIndex] = useState(0);

    useEffect(() => {
        getNotes().then((response) => {
            setNotes(response.data)
        })
    }, []);

    return (
        <div className="notes">
            <div className="actions">
                <button><i className="fas fa-plus"/></button>
                <button><i className="fas fa-trash-alt"/></button>
            </div>
            <div className="list">
                {notes.map((note, index) => {
                    return (
                        <div className={`note ${noteIndex === index ? 'selected' : '' }`} key={note.id} onClick={() => {
                            setNoteIndex(index)
                        }}>
                            <p className="title">{note.title}</p>
                            <p className="body">{note.body}</p>
                            <p className="date">{note.updated_at}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Notes;