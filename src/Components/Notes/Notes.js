import React, {useState, useEffect} from 'react';
import {getNotes} from "../../Services/Notes";

import "./Notes.scss"

const Notes = () => {
    const [notes, setNotes] = useState([])
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
                {notes.map((note) => {
                    return (
                        <div className="note" key={note.id}>
                            <p className="title">{note.title}</p>
                            {/*<p className="body">{note.body}</p>*/}
                            {/*<p className="date">{note.updated_at}</p>*/}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Notes;