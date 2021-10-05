import React, {useState, useEffect, useRef} from 'react';
import {getFolders} from "../../Services/Folders";

import "./Folders.scss"

const Folders = () => {
    const newFolderInputRef = useRef()

    const [folders, setFolders] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [folderIndex, setFolderIndex] = useState(-1)
    const [allNotesSelected, setAllNotesSelected] = useState(true);

    useEffect(() => {
        getFolders().then((response) => {
            setFolders(response.data)
        })
    }, []);

    useEffect(() => {
        const handleEnterKey = (event) => {
            if (event.key === 'Enter') {
                setFolders([...folders, {
                    id: Math.random().toString(36).substr(2, 5),
                    name: newFolderInputRef.current.value
                }])
                setAddNew(false)
            }
        }

        const inputRef = newFolderInputRef;
        if (inputRef && inputRef.current) {
            newFolderInputRef.current.addEventListener("keypress", handleEnterKey)
        }

        return () => {
            if (inputRef && inputRef.current) {
                inputRef.current.removeEventListener("keypress", handleEnterKey)
            }
        }
    }, [addNew, folders])

    return (
        <div className="folders">
            <div className="actions">
                <button onClick={() => {
                    setAddNew(true)
                }}><i className="fas fa-plus"/></button>
                <button><i className="fas fa-trash-alt"/></button>
            </div>
            <div className="list">
                <div className={`folder ${allNotesSelected ? 'selected' : ''}`} onClick={() => {
                    setFolderIndex(-1)
                    setAllNotesSelected(true)
                }}>
                    <i className="far fa-folder"/>
                    <p className="title">All notes</p>
                </div>
                {folders.map((folder, index) => {
                    return (
                        <div className={`folder ${index === folderIndex ? 'selected' : ''}`} key={folder.id}
                             onClick={() => {
                                 setFolderIndex(index)
                                 setAllNotesSelected(false)
                             }}>
                            <i className="far fa-folder"/>
                            <p className="title">{folder.name}</p>
                        </div>
                    )
                })}
                {addNew && <div className="folder new">
                    <i className="far fa-folder"/>
                    <input ref={newFolderInputRef} className="new-entry" type="text" placeholder="Name"/>
                </div>}
            </div>
        </div>
    )
}

export default Folders;