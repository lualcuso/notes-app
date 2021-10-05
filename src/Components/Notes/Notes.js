import React, {useState, useEffect} from 'react';
import { getNotes } from "../../Services/Notes";

import "./Notes.scss"

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [noteIndex, setNoteIndex] = useState(-1);

    useEffect(() => {
        getNotes().then((response) => {
            setNotes(response.data)
        })
    }, []);

    const dispatchNoteEvent = (note) => {
        const noteEvent = new CustomEvent('note', { detail: {note: note} });
        document.dispatchEvent(noteEvent)
    }

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
                            setNoteIndex(index);
                            dispatchNoteEvent(note)
                        }}>
                            <p className="body">{note.content}</p>
                            <p className="date">{note.updated_at}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Notes;