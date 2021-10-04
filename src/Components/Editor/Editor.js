import React, {useEffect, useState, useRef} from 'react';

import './Editor.scss'

const Editor = () => {
    const titleRef = useRef();
    const bodyRef = useRef();
    const [note, setNote] = useState(null);

    const handleNoteEvent = ({ detail }) => {
        const { note } = detail;
        setNote(note);
    }

    useEffect(() => {
        document.addEventListener('note', handleNoteEvent);

        return () => {
            document.removeEventListener('note', handleNoteEvent)
        }
    }, [])

    return (
        <div className="editor">
            <div className="actions">
                <button style={{visibility: 'hidden'}}>
                    <i className="fas fa-plus"/>
                </button>
            </div>
            <div className="container">
                {note && <input type="text" className="note-title" ref={titleRef}
                                value={note.title} onChange={() => {}}/>}
                {note && <textarea ref={bodyRef}
                                   className="note-body" cols="30" rows="10"
                                   value={note.body}
                                   onChange={() => {}}/>}
            </div>

        </div>
    )
}

export default Editor;