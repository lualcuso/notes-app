import React, {useState, useEffect} from 'react';
import { getFolders } from "../../Services/Folders";

import "./Folders.scss"

const Folders = () => {
    const [folders, setFolders] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [folderIndex, setFolderIndex] = useState(-1)
    const [allNotesSelected, setAllNotesSelected] = useState(true);

    useEffect(() => {
        getFolders().then((response) => {
            setFolders(response.data)
        })
    }, [])

    return (
        <div className="folders">
            <div className="actions">
                <button onClick={() => {
                    setAddNew(true)
                }}><i className="fas fa-plus"/></button>
                <button><i className="fas fa-trash-alt"/></button>
            </div>
            <div className="list">
                <div className={`folder ${allNotesSelected ?'selected' : ''}`} onClick={() => {
                    setFolderIndex(-1)
                    setAllNotesSelected(true)
                }}>
                    <p className="title">All notes</p>
                </div>
                {folders.map((folder, index) => {
                    return (
                        <div className={`folder ${index === folderIndex ?'selected' : ''}`} key={folder.id} onClick={() => {
                            setFolderIndex(index)
                            setAllNotesSelected(false)
                        }}><p className="title">{folder.name}</p></div>
                    )
                })}
                {addNew && <div className="folder new">
                    <input type="text" placeholder="Name"/>
                </div>}
            </div>
        </div>
    )
}

export default Folders;