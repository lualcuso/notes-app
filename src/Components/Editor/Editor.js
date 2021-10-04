import React from 'react';

import './Editor.scss'

const Editor = () => {
    return (
        <div className="editor">
            <div className="actions">
                <button><i className="fas fa-plus"/></button>
            </div>
            <div className="container">
                <textarea name="note" id="body" cols="30" rows="10"/>
            </div>

        </div>
    )
}

export default Editor;