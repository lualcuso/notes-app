import React, {useEffect, useState, useRef} from 'react';

import './Editor.scss'

const Editor = () => {
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
                {note && <textarea ref={bodyRef}
                                   className="note-content" cols="30" rows="10"
                                   value={note.content}
                                   onChange={(event) => {
                                       const updatedNode = Object.assign({}, note, {content: event.target.value});
                                       setNote(updatedNode);
                                   }}/>}
            </div>

        </div>
    )
}

export default Editor;