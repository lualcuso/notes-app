import React, {useState, useEffect} from 'react';
import { getFolders } from "../../Services/Folders";

import "./Folders.scss"

const Folders = () => {
    const [folders, setFolders] = useState([]);
    const [addNew, setAddNew] = useState(false);

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
                <div className="folder selected">All notes</div>
                {folders.map((folder) => {
                    return <div className="folder" key={folder.id}>{folder.name}</div>
                })}
                {addNew && <div className="folder new">
                    <input type="text" placeholder="Name"/>
                </div>}
            </div>
        </div>
    )
}

export default Folders;