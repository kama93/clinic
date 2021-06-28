import './textArea.css';
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";

function TextArea() {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    return (
        <div>
            <form className='text-container'>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={10} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                    className='textArea-form'
                />
                <input type="submit" value="Submit" className='submit-buton' />
            </form>
        </div>
    );
}

export default TextArea;
